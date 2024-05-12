import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mogodb connection was successful!");
    });

    connection.on("error", (err) => {
      console.log(
        "There was an error while connecting to the mongodb --------> ",
        err
      );
      process.exit();
    });
  } catch (e) {
    console.log("There was some error ----------> ", e);
  }
}
