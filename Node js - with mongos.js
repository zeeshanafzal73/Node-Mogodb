const mongoose = require("mongoose");
var users = require("./model/user's");
const uri =
  "mongodb+srv://zeeshanafzal37051:GnQatcCn4fR8XmDY@cluster0.5r5ogsd.mongodb.net/youtube?retryWrites=true&w=majority";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

async function fetchData() {
  try {
    const user = await users.find({}); // Using Promise syntax
    console.log("Users are: ", user);
    await run();
  } catch (err) {
    console.log("Error while fetching users:", err);
  }
}

//data sending from Mongo

const data = new users({
  _id: new mongoose.Types.ObjectId(),
  name: "Vannesa",
  age: 24,
  Job: "Software Engineer",
});

async function display() {
  try {
    const result = await data.save();
    console.log(result);
    await run();
  } catch (err) {
    console.log(err);
  }
}

// Call the run, fetchData function
display().catch(console.dir);
// fetchData().catch(console.dir);
run().catch(console.dir);
