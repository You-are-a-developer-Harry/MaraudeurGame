import { Spell } from "./src/entities/Spell";
import { DataSource } from "typeorm";
import { migrations } from "./migrations";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Sound } from "./src/entities/Sound";

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  entities: [Spell, Sound],
  migrations: migrations,
})
