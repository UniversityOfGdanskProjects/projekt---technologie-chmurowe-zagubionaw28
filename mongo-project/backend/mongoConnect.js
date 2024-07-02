const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const config = require('./backend-config');


const app = express();

app.use(cors());


app.get('/', async (req, res) => {
    const client = new MongoClient(config["client-url"]);
    await client.connect();

    const db = client.db(config["database"]);
    const collection = db.collection(config["collectionName"]);

    const users = await collection.find().toArray();
    res.send(users);
});


app.listen(config["port"], () => {
  console.log(`Serwer Express działa na http://localhost:${config["port"]}`);
});
