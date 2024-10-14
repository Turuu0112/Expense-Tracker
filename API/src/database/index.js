
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config();

const sql = neon(process.env.DRIZZLE_DATABASE_URL);

export const db = drizzle(sql, { schema });
