import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./schema.authapps.prisma",

  datasource: {
    url: process.env["AUTHAPPS_URL"],
  },
});

/*
npx prisma db pull --config=prisma/prisma-authapps/prisma.config.ts   
npx prisma generate --config=prisma/prisma-authapps/prisma.config.ts
*/
