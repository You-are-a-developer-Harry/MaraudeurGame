import { MigrationInterface, QueryRunner } from "typeorm";

export class init1677109132547 implements MigrationInterface {
    name = 'init1677109132547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sound" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "spell" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "image" varchar NOT NULL, "mana" integer NOT NULL, "description" text NOT NULL, "sound_id" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_spell" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "image" varchar NOT NULL, "mana" integer NOT NULL, "description" text NOT NULL, "sound_id" integer, CONSTRAINT "FK_5853cbadbf4e67261ff87ed1f24" FOREIGN KEY ("sound_id") REFERENCES "sound" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_spell"("id", "name", "image", "mana", "description", "sound_id") SELECT "id", "name", "image", "mana", "description", "sound_id" FROM "spell"`);
        await queryRunner.query(`DROP TABLE "spell"`);
        await queryRunner.query(`ALTER TABLE "temporary_spell" RENAME TO "spell"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spell" RENAME TO "temporary_spell"`);
        await queryRunner.query(`CREATE TABLE "spell" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "image" varchar NOT NULL, "mana" integer NOT NULL, "description" text NOT NULL, "sound_id" integer)`);
        await queryRunner.query(`INSERT INTO "spell"("id", "name", "image", "mana", "description", "sound_id") SELECT "id", "name", "image", "mana", "description", "sound_id" FROM "temporary_spell"`);
        await queryRunner.query(`DROP TABLE "temporary_spell"`);
        await queryRunner.query(`DROP TABLE "spell"`);
        await queryRunner.query(`DROP TABLE "sound"`);
    }

}
