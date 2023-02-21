import { Spell } from "./src/entities/Spell";
import { DataSource } from "typeorm";
import { config } from "./src/utils/config";
import { migrations } from "./migrations";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.database.host,
  port: Number(config.database.port),
  username: config.database.user,
  password: config.database.password,
  database: config.database.name,
  synchronize: true,
  logging: true,
  entities: [Spell],
  migrations: migrations,
})
