import mongoose from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("MongoDB Connected from Previous.");
    return global.mongoose.conn;
  } else {
    const conString = process.env.MONGODB_URI;
    const promise = mongoose.connect(conString, {
      autoIndex: true,
    });

    global.mongoose = {
      conn: await promise,
      promise,
    };
    console.log("MongoDB Newly Connected");
    return await promise;
  }
}
