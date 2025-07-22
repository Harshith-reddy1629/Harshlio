import { connection, connect as Connect } from "mongoose";

let isConnected = false;

const mongoConnection = async () => {
  try {
    const connectionState = connection.readyState;

    if (isConnected || connectionState === 1 || connectionState === 2) {
      console.log("database already connected");
      return;
    }

    const connect = await Connect(process.env.CONNECTION_STRING!);

    isConnected = true;

    console.log("database", connect.connection.name);
  } catch (error) {
    console.log("error", error);
    // process.exit(1);
    throw error;
  }
};

export default mongoConnection;
