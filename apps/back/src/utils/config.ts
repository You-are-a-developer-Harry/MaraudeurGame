require('dotenv').config()

export const config = {
  frontOrigin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173',
  port: process.env.PORT ?? '5000',
  logLevel: process.env.LOG_LEVEL ?? 'warning',
}
