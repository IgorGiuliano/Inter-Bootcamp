import { Pool } from 'pg';

const connectionString = 'postgres://ijkkafkd:67aF0Lpe6SQNFhUgQWwVzmtc0qm1twN8@kesavan.db.elephantsql.com/ijkkafkd';

const db = new Pool({ connectionString });

export default db;