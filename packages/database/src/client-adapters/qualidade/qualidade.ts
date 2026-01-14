import "dotenv/config";
import { PrismaClient } from "@clients/qualidade/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const config = {
  server: process.env.SERVER,
  port: Number(process.env.DB_PORT ?? 1433),
  database: process.env.DATABASE_QUALIDADE,
  user: process.env.USER_QUALIDADE,
  password: process.env.PASSWORD_QUALIDADE,
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Use this if you're using self-signed certificates
  },
};

export const adapter = new PrismaMssql(config);
export const prisma = new PrismaClient({ adapter });
