const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { ProjectModel } = require("../src/models/index");

dotenv.config();

const dbString = process.env.db_string;
console.log(dbString);
mongoose.connect(dbString);

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", async () => {
  console.log("Connected to MongoDB");

  try {
    // Create sample projects
    const project1 = await ProjectModel.create({
      name: "Project 1",
      type: "Type A",
      domain: "project1.com",
      userId: "6554b01209ab40124b64148d", // Replace with an actual ObjectId from your users collection
    });

    const project2 = await ProjectModel.create({
      name: "Project 2",
      type: "Type B",
      domain: "project2.com",
      userId: "6554b01209ab40124b64148d", // Replace with an actual ObjectId from your users collection
    });

    // Add more projects as needed

    console.log("Projects created:", project1, project2);

    // Close the database connection
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
});
