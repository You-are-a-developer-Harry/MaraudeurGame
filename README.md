# Turborepo starter

## Install

```bash
yarn
```

## Run localy

```bash
yarn dev
```

## Add a dependency to an app

```bash
yarn workspace <app> add <dep>
```

## TypeORM CheatSheet

Generate new migration

```bash
yarn workspace back typeorm migration:generate migrations/<name> -d dbConfig
```

Run migrations

```bash
yarn workspace back typeorm migration:run -d dbConfig
```
