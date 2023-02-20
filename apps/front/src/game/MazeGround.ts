import { Mesh, BoxGeometry, MeshStandardMaterial, WebGLRenderer } from 'three'
//import { getEnvMap } from './utils/envMap'

export class MazeGround {
  async render(
    groundWidth: number,
    groundHeight: number,
    renderer: WebGLRenderer
  ) {
    const groundMesh = new Mesh(
      new BoxGeometry(groundWidth, 1, groundHeight).translate(
        groundWidth / 2,
        -1,
        groundHeight / 2
      ),
      new MeshStandardMaterial({
       // envMap: await getEnvMap(renderer),
        flatShading: true,
        color: 'white',
      }) as any
    )
    return groundMesh
  }
}
