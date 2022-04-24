const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_KEY}@cluster0.jwhcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

    }
    finally {

    }
}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send("Emajhon is running")
})

app.listen(port, () => {
    console.log("Emajhon is running", port)
})