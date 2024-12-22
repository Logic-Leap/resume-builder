import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://bsidin79:6IYAkaYm9PUOCoei@cluster0.hqvss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // From environment variables
const options = {};

let client;
let clientPromise;

if (! "mongodb+srv://bsidin79:6IYAkaYm9PUOCoei@cluster0.hqvss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") {
  throw new Error('Please add MONGODB_URI to your environment variables.');
}

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable to preserve the client
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect(); // Connect and store promise
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
