import "dotenv/config";
import { PrismaClient } from "@clients/authapps/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const config = {
  server: process.env.SERVER,
  port: Number(process.env.DB_PORT ?? 1433),
  database: process.env.DATABASE_AUTHAPPS,
  user: process.env.USER_AUTHAPPS,
  password: process.env.PASSWORD_AUTHAPPS,
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Use this if you're using self-signed certificates
  },
};

export const adapter = new PrismaMssql(config);
export const prisma = new PrismaClient({ adapter });
