// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI || ''
// const options = {}

// let client: MongoClient
// let clientPromise: Promise<MongoClient>

// if (!uri) {
//   throw new Error('Please add your Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development, use a global variable to preserve client across hot reloads
//   if (!(global as any)._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     ;(global as any)._mongoClientPromise = client.connect()
//   }
//   clientPromise = (global as any)._mongoClientPromise
// } else {
//   // In production, create a new client
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// export default clientPromise



import { MongoClient, MongoClientOptions } from 'mongodb'

const uri: string = process.env.MONGODB_URI ?? ''
const options: MongoClientOptions = {}

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local')
}

// Extend the NodeJS global interface to include _mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // Use a global variable to preserve the client across hot reloads in development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production, create a new client for every connection
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
