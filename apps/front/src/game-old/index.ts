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
  OrthographicCamera,
} from 'three'
import { OrbitControls } from 'three-stdlib'
import { Maze } from './Maze'
import { MazeGround } from './MazeGround'

export function game() {
  const scene = new Scene()
  scene.background = new Color('black')

  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = ACESFilmicToneMapping
  renderer.outputEncoding = sRGBEncoding
  renderer.physicallyCorrectLights = true
  document.body.innerHTML = ""
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
    
    // const camera = new PerspectiveCamera(
    //   45,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   100
    // )
    const ratio = window.innerWidth / window.innerHeight
    const cameraWidth = 100
    const cameraHeight = cameraWidth / ratio
    const camera = new OrthographicCamera(
      cameraWidth / -2,
      cameraWidth / 2,
      cameraHeight / 2,
      cameraHeight / -2,
      50,
      700
    )
    camera.position.set(0, 500, 300)
    camera.lookAt(0,0,0)


    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)
    controls.dampingFactor = 0.05
    controls.enableDamping = true

    // Add to scene
    scene.add(axesHelper)
    scene.add(mazeMesh)
    scene.add(mazeGroundMesh)
    

    renderer.setAnimationLoop(() => {
      controls.update()
      renderer.render(scene, camera)
      console.log(camera.position);
      
    })
  })()
}
