require('dotenv').config()

export const config = {
  frontOrigin: process.env.FRONTEND_ORIGIN ?? 'http://127.0.0.1:5173',
  port: process.env.PORT ?? '5000',
  logLevel: process.env.LOG_LEVEL ?? 'warning',
  database: {
    host: process.env.DATABSE_HOST ?? 'localhost',
    port: process.env.DATABSE_PORT ?? '3306',
    user: process.env.DATABSE_USER ?? 'root',
    password: process.env.DATABSE_PASSWORD ?? '',
    name: process.env.DATABSE_NAME ?? 'iim_nodert',
  },
}
