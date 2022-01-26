import { Pool } from 'pg';

const connectionString = 'connectionstring';

const db = new Pool({ connectionString });

export default db;