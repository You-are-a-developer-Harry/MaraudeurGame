require('dotenv').config();
console.log(process.env.FRONTEND_ORIGIN)

export const config = {
  frontOrigin: process.env.FRONTEND_ORIGIN ?? 'http://127.0.0.1:5173'
}
