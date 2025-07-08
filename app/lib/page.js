import { MongoClient, ServerApiVersion } from "mongodb";

export default function dbConnect(collectionName) {
  const uri = process.env.DB_URI;
  const dbName = process.env.DB_Name;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(dbName).collection(collectionName);
}
