const express = require('express');
const cors = require('cors');
require('dotenv').config() ;
// console.log(process.env)
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express() ;
const port = process.env.PORT || 5000 ;

// MidleWare 

app.use(cors ()) ;
app.use(express.json()) ;


// RTuaYbB1RZJB1YIz
// coffehouse

// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.40yptof.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    



    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");

  } finally {
    await client.connect();
  }
}
run().catch(console.dir);




app.get("/" , (req , res) => {
    res.send("Coffee house server")
})

app.listen(port , (req , res) => {
    console.log(`Coffee server is running :  ${port}`)
})