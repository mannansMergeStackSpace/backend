const dotenv = require("dotenv");
const mongoose = require("mongoose");

const { PlanModel } = require("../src/models/index");

dotenv.config();

const dbString = process.env.db_string;
console.log(dbString);
mongoose.connect(dbString);

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", async () => {
  console.log("Connected to MongoDB");

  try {
    // Create sample plans
    const plan1 = await PlanModel.create({
      name: "Basic Plan",
      maximumProjects: 5,
      maximumUsers: 10,
      requestsPerMonth: 1000,
    });

    const plan2 = await PlanModel.create({
      name: "Pro Plan",
      maximumProjects: 10,
      maximumUsers: 20,
      requestsPerMonth: 2000,
    });

    // Add more plans as needed

    console.log("Plans created:", plan1, plan2);

    // Close the database connection
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
});
