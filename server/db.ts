import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from './src/schema';

const client = new Client({
    host: 'localhost',
    port: 5000,
    user: 'myuser',
    password: 'mypassword',
    database: 'mydb',
});
  
await client.connect();

export const db = drizzle(client, { schema: { users } });