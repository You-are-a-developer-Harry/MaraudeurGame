import generator from "generate-maze";

const WIDTH = 20
const HEIGHT = 16

export const generateBoard = () => {
  return generator(WIDTH, HEIGHT, true,  Math.random() * 1000)
}


