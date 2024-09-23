import { pgTable, serial, integer, varchar, boolean, date } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5000,  // Adjust this if your port mapping is different
  user: 'your_db_user',  // Replace with your PostgreSQL username
  password: 'your_db_password',  // Replace with your PostgreSQL password
  database: 'your_database_name',  // Replace with your database name
});

export const db = drizzle(pool);