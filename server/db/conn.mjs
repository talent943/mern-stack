import { MongoClient } from "mongodb";

// const db = process.env.ATLAS_URI;

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = client.db("Sample_training");
  client.close();

export default db;