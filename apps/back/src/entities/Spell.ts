import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SpellType } from "../types";
import { Sound } from "./Sound";

@Entity()
export class Spell implements SpellType {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  image!: string

  @ManyToOne(() => Sound)
  sound?: Sound

  @Column()
  mana!: number

  @Column("text")
  description!: string
}
