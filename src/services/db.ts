import Database from 'tauri-plugin-sql-api';

const filename = 'pilldrawer.db';

const initialize = (db: Database) =>
  db.execute(
    `CREATE TABLE IF NOT EXISTS "medication" (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      kind TEXT NOT NULL,
      icon TEXT,
      count INT NOT NULL,
      dose_number INT NOT NULL,
      dose REAL NOT NULL,
      unit TEXT NOT NULL
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

let instance: Database | null = null;

export const db = async () => {
  if (instance) return instance;
  else {
    instance = await connect();
    return instance;
  }
};
