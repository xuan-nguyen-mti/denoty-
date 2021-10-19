import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.26.0/mod.ts";

const client = new MongoClient();

//Connecting to a Local Database
await client.connect("connection string");



const db = client.database("test");
console.log("db connected")

export default db;