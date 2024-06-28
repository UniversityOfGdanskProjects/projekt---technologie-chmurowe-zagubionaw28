const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();

app.use(cors());
const port = 4000;

const url = 'mongodb://a5f1c9464aa2:27017';

const dbName = 'mydatabase';
const collectionName = 'users';

app.get('/', async (req, res) => {
    const client = new MongoClient(url);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const users = await collection.find().toArray();
    res.send(users);
});

app.listen(port, () => {
  console.log(`Serwer Express działa na http://localhost:${port}`);
});
