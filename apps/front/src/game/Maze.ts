import {
  BoxGeometry,
  Mesh,
  PMREMGenerator,
  FloatType,
  MeshStandardMaterial,
  WebGLRenderer,
} from 'three'
import { mergeBufferGeometries, RGBELoader } from 'three-stdlib'
//import EnvMapUrl from '../assets/envmap.hdr'
//import { getEnvMap } from './utils/envMap'

export class Maze {
  map: any[] = []
  width = 50
  height = 50
  wallWith = 0.5

  directions = {
    N: { dy: -1, opposite: 'S' },
    S: { dy: 1, opposite: 'N' },
    E: { dx: 1, opposite: 'W' },
    W: { dx: -1, opposite: 'E' },
  }

  prefill() {
    for (let x = 0; x <= this.width; x++) {
      this.map[x] = []
      for (let y = 0; y <= this.height; y++) {
        this.map[x][y] = {}
      }
    }
  }

  shuffle(o) {
    for (
      let j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o
  }

  carve(x0, y0, direction) {
    let x1 = x0 + (this.directions[direction].dx || 0),
      y1 = y0 + (this.directions[direction].dy || 0)

    if (x1 == 0 || x1 == this.width || y1 == 0 || y1 == this.height) {
      return
    }
    if (this.map[x1][y1].seen) {
      return
    }

    this.map[x0][y0][direction] = true
    this.map[x1][y1][this.directions[direction].opposite] = true
    this.map[x1][y1].seen = true

    var directions = this.shuffle(['N', 'S', 'E', 'W'])
    for (var i = 0; i < directions.length; i++) {
      this.carve(x1, y1, directions[i])
    }
  }

  geometry() {
    let mazeGeometry = new BoxGeometry(0, 0, 0)
    var output = ''
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const walls: BoxGeometry[] = []
        if (!this.map[x][y].S && x !== 0) {
          // _ Horizontal wall
          const wall1 = new BoxGeometry(1, 1, this.wallWith)
          wall1.translate(x - 0.5, 0, y)
          walls.push(wall1)
        }
        if (!this.map[x][y].E && y !== 0) {
          // | Vertical wall
          const wall2 = new BoxGeometry(this.wallWith, 1, 1)
          wall2.translate(x - this.wallWith / 2, 0, y - 0.25)
          walls.push(wall2)
        }
        mazeGeometry = mergeBufferGeometries([mazeGeometry, ...walls])
        output += this.map[x][y].S ? ' ' : '_'
        output += this.map[x][y].E ? ' ' : '!'
      }
      output += '\n'
    }

    output = output.replace(/_ /g, '__')
    console.log(output)
    return mazeGeometry
  }

  async render(renderer: WebGLRenderer) {
    this.prefill()
    this.carve(this.width / 2, this.height / 2, 'N')
    const mazeGeometry = this.geometry()

    const mazeMesh = new Mesh(
      mazeGeometry,
      new MeshStandardMaterial({
        //envMap: await getEnvMap(renderer),
        flatShading: true,
        color: 'red',
      }) as any
    )

    return mazeMesh
  }
}
