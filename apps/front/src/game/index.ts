import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  ACESFilmicToneMapping,
  sRGBEncoding,
  AxesHelper,
  Vector3,
  AmbientLight,
} from 'three'
import { OrbitControls } from 'three-stdlib'
import { Maze } from './Maze'
import { MazeGround } from './MazeGround'

export function game() {
  const scene = new Scene()
  scene.background = new Color('#1D1D33')

  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = ACESFilmicToneMapping
  renderer.outputEncoding = sRGBEncoding
  renderer.physicallyCorrectLights = true
  document.body.appendChild(renderer.domElement)

  ;(async function () {
    // Generate maze
    const maze = new Maze()
    const mazeMesh = await maze.render(renderer)

    // Generate ground
    const groundWidth = maze.width - maze.wallWith * 2
    const groundHeight = maze.height - maze.wallWith * 2
    const mazeGround = new MazeGround()
    const mazeGroundMesh = await mazeGround.render(
      groundWidth,
      groundHeight,
      renderer
    )

    // Helpers
    const axesHelper = new AxesHelper(5)
    axesHelper.setColors(
      new Color('#3F7FBF'),
      new Color('#3FBF7F'),
      new Color('#BF3F3F')
    )

    // Player
    const camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(1, 100, 20)


    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)
    controls.dampingFactor = 0.05
    controls.enableDamping = true

    const light = new AmbientLight(0x404040) // soft white light
    scene.add(light)

    // Add to scene
    scene.add(axesHelper)
    scene.add(mazeMesh)
    scene.add(mazeGroundMesh)

    renderer.setAnimationLoop(() => {
      controls.update()
      renderer.render(scene, camera)
    })
  })()
}
