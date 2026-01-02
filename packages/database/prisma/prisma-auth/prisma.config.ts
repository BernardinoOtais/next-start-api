import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./schema.auth.prisma",

  datasource: {
    url: process.env["AUTH_URL"],
  },
});

/*
npx prisma db pull --config=prisma/prisma-auth/prisma.config.ts   
npx prisma generate --config=prisma/prisma-auth/prisma.config.ts
*/
