const fs = require('fs');

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'; // URL do lokalnej instancji MongoDB
const dbName = 'mydatabase'; // Nazwa bazy danych
const collectionName = 'users'; // Nazwa kolekcji

const loadUsers = async () => {
  try {
    const data = fs.readFileSync('users.json', 'utf8');
    const users = JSON.parse(data); // Parsowanie danych JSON

    const client = new MongoClient(url);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(users);
    console.log(`${result.insertedCount} dokumentów zostało zaimportowanych do kolekcji ${collectionName}`);

    await client.close();
    console.log('Zamknięto połączenie z MongoDB');
  } catch (err) {
    console.error('Wystąpił błąd:', err);
  }
};

loadUsers();
