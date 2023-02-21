import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {SpellType} from "types"

@Entity()
export class Spell implements SpellType{
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  cost!: number
}
