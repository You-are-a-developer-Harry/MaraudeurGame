import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SoundType } from "../types";

@Entity()
export class Sound implements SoundType {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string
}
