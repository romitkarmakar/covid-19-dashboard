const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = (req, res) => {
    client.connect(err => {
        const collection = client.db(process.env.MONGODB_DATABASE).collection("devices");
        
        client.close();
      });
}