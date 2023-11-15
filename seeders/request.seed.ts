const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { RequestModel } = require("../src/models/index");

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
    // Replace '6554b120b91ff37abab66d7c' with an actual ObjectId from your projects collection
    const projectId = "6554b120b91ff37abab66d7c";

    // Create sample requests with the specified projectId
    const request1 = await RequestModel.create({
      projectId: projectId,
      method: "GET",
      url: "/api/data",
    });

    const request2 = await RequestModel.create({
      projectId: projectId,
      method: "POST",
      url: "/api/create",
    });

    // Add more requests as needed

    console.log("Requests created:", request1, request2);

    // Close the database connection
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
});
