import { Mesh, BoxGeometry, MeshStandardMaterial, WebGLRenderer, TextureLoader, MeshBasicMaterial } from 'three'
//import { getEnvMap } from './utils/envMap'

export class MazeGround {
  async render(
    groundWidth: number,
    groundHeight: number,
    renderer: WebGLRenderer
  ) {
    const texture = new TextureLoader()
    .load('/parchment-texture.jpg')
    const groundMesh = new Mesh(
      new BoxGeometry(groundWidth, 1, groundHeight).translate(
        groundWidth / 2,
        -1,
        groundHeight / 2
      ),
      new MeshBasicMaterial({
       // envMap: await getEnvMap(renderer),
        //flatShading: true,
        map: texture
      }) as any
    )
    return groundMesh
  }
}
