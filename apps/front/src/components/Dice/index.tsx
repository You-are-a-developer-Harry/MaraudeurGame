import  { useEffect, useRef } from "react";
import * as THREE from "three";
import { useUserStore } from "@stores/UserStore";
import { HogwartHouse } from "types";

export function Dice({ diceValue }: { diceValue: number }) {
  const canvasRef = useRef(null)

  const user = useUserStore((state) => state.user)

  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    )
    camera.position.z = 1

	// axes
	// const axesHelper = new THREE.AxesHelper(500)
	// scene.add(axesHelper) // The X axis is red. The Y axis is green. The Z axis is blue.

    // renderer
    const renderer = new THREE.WebGLRenderer({
      // @ts-ignore
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth /2, window.innerHeight /2)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth /2, window.innerHeight /2)
      renderer.setPixelRatio(window.devicePixelRatio)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    })

    // cube
    let texture_ft = new THREE.TextureLoader().load('image/1.png')
    let texture_bk = new THREE.TextureLoader().load('image/2.png')
    let texture_up = new THREE.TextureLoader().load('image/3.png')
    let texture_dn = new THREE.TextureLoader().load('image/4.png')
    let texture_rt = new THREE.TextureLoader().load('image/5.png')
    let texture_lf = new THREE.TextureLoader().load('image/6.png')

    // set color depending on house of player
    let color
    let house = user!.house.name
    console.log('house:', house)

    switch (house) {
      case HogwartHouse.GRYFFONDOR:
        color = 0xb33429
        break
      case HogwartHouse.SLYTHERIN:
        color = 0x386a2c
        break
      case HogwartHouse.HUFFLEPUFF:
        color = 0xdfbe45
        break
      case HogwartHouse.RAVENCLAW:
        color = 0x408fb1
        break
      default: HogwartHouse.GRYFFONDOR
        color = 0xb33429
        break
    }

    let materialArray = [
      new THREE.MeshBasicMaterial({
        map: texture_rt,
        transparent: true,
        color: color,
      }),
      new THREE.MeshBasicMaterial({
        map: texture_lf,
        transparent: true,
        color: color,
      }),
      new THREE.MeshBasicMaterial({
        map: texture_up,
        transparent: true,
        color: color,
      }),
      new THREE.MeshBasicMaterial({
        map: texture_dn,
        transparent: true,
        color: color,
      }),
      new THREE.MeshBasicMaterial({
        map: texture_ft,
        transparent: true,
        color: color,
      }),
      new THREE.MeshBasicMaterial({
        map: texture_bk,
        transparent: true,
        color: color,
      }),
    ]

    for (let i = 0; i < materialArray.length; i++) {
      materialArray[i].onBeforeCompile = function (shader) {
        const custom_map_fragment = THREE.ShaderChunk.map_fragment.replace(
          `diffuseColor *= sampledDiffuseColor;`,
          `diffuseColor = vec4( mix( diffuse, sampledDiffuseColor.rgb, sampledDiffuseColor.a ), opacity );`
        )

        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <map_fragment>',
          custom_map_fragment
        )
      }
    }

    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3)
    const cube = new THREE.Mesh(geometry, materialArray)
    scene.add(cube)

    const loopingTime = 100
    let timeWhenClick = 0
    let count = 0

    texture_ft = new THREE.TextureLoader().load(
      `${'image/' + diceValue.toString() + '.png'}`
    )
    materialArray[4].map = texture_ft

    // each image : 60fps
    const update = (time: any) => {
      requestAnimationFrame(update)
      if (count == 500) {
        count = 0
      } else if (count >= loopingTime) {
        cube.rotation.x = 0
        cube.rotation.y = 0
        timeWhenClick = 0
        count++
      } else if (timeWhenClick < loopingTime) {
        cube.rotation.x = time / 100
        cube.rotation.y = time / 100
        count++
      }
      // Render WebGL Scene
      renderer.render(scene, camera)
    }
    requestAnimationFrame(update)
  }, [diceValue])

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      style={{ position: 'absolute', bottom: -15, left: '-17%', zIndex: 3 }}
    ></canvas>
  )
}

export default Dice
