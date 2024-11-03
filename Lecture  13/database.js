const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://bhavyakhatri408:bk408@cluster0.kwqjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

const dbName = "NamasteNode";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // Create user

  /*const data = [
    {
      firstName: "Virat",
      lastName: "Kohli",
      city: "Delhi",
      role: "Mern-Stack Developer",
    },
    {
      firstName: "MS",
      lastName: "Dhoni",
      city: "Ranchi",
      role: "Dev-ops Developer",
    },
    {
      firstName: "Rishabh",
      lastName: "Pant",
      city: "Ranchi",
      role: "Backend Developer",
    },
}

  const insertResult = await collection.insertMany(data);
  console.log("Inserted documents =>", insertResult); */

  // Find all documents
  //const findResult = await collection.find({}).toArray();
  //console.log("Found documents =>", findResult);

  // Find specific document with query filter
  /*const filteredDocs = await collection.find({ firstName: "Bhavya" }).toArray();
  console.log(
    "Found documents filtered by { firstName: 'Bhavya', } =>",
    filteredDocs
  );*/

  // Update Document

  /*const updateResult = await collection.updateOne(
    { firstName: "Min" },
    { $set: { city: "New-York" } }
  );
  console.log("Updated documents =>", updateResult); */

  // Remove document

   const deleteResult = await collection.deleteMany({ city: "Ranchi" });
   console.log("Deleted documents =>", deleteResult)

  return "done.";
}



main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

  // _id: "ObjectId('67278ef73e73c510f80315fb')"
