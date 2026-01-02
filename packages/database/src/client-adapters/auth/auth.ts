import "dotenv/config";
import { PrismaClient } from "@clients/auth/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const config = {
  server: process.env.SERVER,
  port: Number(process.env.DB_PORT ?? 1433),
  database: process.env.DATABASE_AUTH,
  user: process.env.USER_AUTH,
  password: process.env.PASSWORD_AUTH,
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Use this if you're using self-signed certificates
  },
};

export const adapter = new PrismaMssql(config);
export const prisma = new PrismaClient({ adapter });
