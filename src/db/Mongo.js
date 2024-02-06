import mongoose from "mongoose";
import { databaseName } from "../constants.js";
import { MONGO_URI } from "../config/siteEnv.js";
const connectDB = async () => {
  try {
    // const connectionIntance=await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)

    const connectionIntance = await mongoose.connect(MONGO_URI);
    console.log(
      `\n Mongodb Connected: DB Host - ${connectionIntance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
