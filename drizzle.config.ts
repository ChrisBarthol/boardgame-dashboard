import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";
config({ path: '.env' });
export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});