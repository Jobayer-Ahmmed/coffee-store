import express from "express"
import cors from "cors"
import { MongoClient, ServerApiVersion } from 'mongodb'
import 'dotenv/config'

const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

// app.post("/post-cafe", (req, res)=>{
//   const newCafe = req.body
//   console.log(newCafe)
//   const result  =collection.insertOne(newCafe)
//   res.send(result)

// })


// console.log(process.env.DB_USER, process.env.SECRET_KEY)


const uri = `mongodb+srv://coffeestore:VK2HQYEFati344Y4@cluster0.3j47jpb.mongodb.net/?retryWrites=true&w=majority`
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_KEY}@cluster0.3j47jpb.mongodb.net/?retryWrites=true&w=majority`
// const uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const DB = client.db("cafeDB")
    const collection = DB.collection("cafeCollection")

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

 

    app.post("/post-cafe", async(req, res)=>{
      const newCafe = req.body
      console.log(newCafe)
      const result  =await collection.insertOne(newCafe)
      res.send(result)

    })
  } 
  catch(err){
    console.log("My error is : ",err)
  }
}
run().catch(console.dir);


app.listen(port, console.log(`Port ${port} is running`))









// serverApi: {
//   version: ServerApiVersion.v1,
//   strict: true,
//   deprecationErrors: true,
// }