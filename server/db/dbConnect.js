// external imports
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// require(".env").config();
DB_URL =
  "mongodb+srv://sasiya:S0W9oP2OvPf27TJK@cluster0.f3vi9nh.mongodb.net/?retryWrites=true&w=majority";

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(DB_URL, {
      //   these are options to ensure that the connection is done properly
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

// module.exports = dbConnect;
dbConnect();
