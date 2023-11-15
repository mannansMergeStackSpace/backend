const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { UserModel } = require("../src/models/index");

dotenv.config();

const dbString = process.env.db_string;
console.log(dbString);
mongoose.connect(dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", async () => {
  console.log("Connected to MongoDB");
  try {
    // Create a sample user with a currentPlan reference
    const user1 = await UserModel.create({
      name: "John Doe",
      email: "john.doe@example.com",
      currentPlan: "6554af4de0cda3c811f31b90", // Replace with an actual ObjectId from your plans collection
    });

    console.log("User created:", user1);

    // Create more users if needed

    // Close the database connection
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
});
