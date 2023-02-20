import { FloatType, PMREMGenerator } from 'three'
import { RGBELoader } from 'three-stdlib'

const envMapUrl = "/envmap.hdr"

let envmap: any

export async function getEnvMap(renderer: any) {
  if (!envmap) {
    let pmrem = new PMREMGenerator(renderer)
    let envmapTexture = await new RGBELoader()
      .setDataType(FloatType)
      .loadAsync(envMapUrl)
    envmap = pmrem.fromEquirectangular(envmapTexture).texture
  }

  return envmap
}
