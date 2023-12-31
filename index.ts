import "module-alias/register";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "@/routes/user.route";

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3005", // Replace with your allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Include cookies
  optionsSuccessStatus: 204, // Respond with a 204 status for preflight requests
};

dotenv.config();

const app: Express = express();
app.use(cors(corsOptions));
const port = process.env.PORT;
const mongoConnectionString = process.env.db_string as string;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/users", UserRouter);

mongoose.connect(mongoConnectionString);
const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));

db.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(
      `⚡️[server]: Server is running at http://localhost:${port} --  ${mongoConnectionString}`
    );
  });
});
