import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {


    if(!config.database_uri){
        throw new Error(`Database uri is not provided in environment varibles`)
    }

    await mongoose.connect(config.database_uri as string);
    console.log("Mongoose is connected on your server");

    app.listen(config.port, () => {
       console.log(`your server is running on port ${config.port}`)
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

main()