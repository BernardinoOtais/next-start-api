import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./schema.qualidade.prisma",

  datasource: {
    url: process.env["QUALIDADE_URL"],
  },
});

/*
npx prisma db pull --config=prisma/prisma-qualidade/prisma.config.ts   
npx prisma generate --config=prisma/prisma-qualidade/prisma.config.ts
*/
