import * as dotenv from 'dotenv';
dotenv.config();

export const DB_TYPE = process.env.DBTYPE || 'postgres';
export const DB_HOST = process.env.HOST || 'localhost';
export const DB_PORT = process.env.DBPORT || '5432';
export const DB_USER = process.env.DBUSER || 'postgres';
export const DB_PASS = process.env.DBPW || 'postgres';
export const DB_NAME = process.env.DBNAME || 'postgres';
