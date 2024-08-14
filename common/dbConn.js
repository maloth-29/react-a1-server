var mongodb = require('mongodb')
async function getDB() {
    const MongoClient = mongodb.MongoClient
    const server = await MongoClient.connect('mongodb+srv://malothu29:vinay5466@react1.grsiaho.mongodb.net/');
    const db = server.db("sms")
    return db;
}

module.exports = getDB;