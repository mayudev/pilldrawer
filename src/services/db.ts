import Database from 'tauri-plugin-sql-api';

const filename = 'pilldrawer.db';

const initialize = (db: Database) =>
  db.execute(
    `CREATE TABLE IF NOT EXISTS "medication" (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      kind TEXT NOT NULL,
      icon TEXT
    );
    
    CREATE TABLE IF NOT EXISTS "package" (
      id INTEGER PRIMARY KEY,
      name TEXT,
      dose_count INT NOT NULL,
      dose REAL NOT NULL,
      medication_id INTEGER,
      FOREIGN KEY(medication_id) REFERENCES medication(id) 
    );`
  );

export const connect = async () => {
  try {
    const db = await Database.load(`sqlite:${filename}`);
    const result = await initialize(db);
    console.dir(result);
    return db;
  } catch (e) {
    console.error('database initialization failed');
    console.error(e);
    throw new Error();
  }
};

export const db = await connect();
