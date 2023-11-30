"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_route_1 = __importDefault(require("@/routes/user.route"));
const cors = require("cors");
const corsOptions = {
    origin: "*", // Replace with your allowed origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(cors(corsOptions));
const port = process.env.PORT;
const mongoConnectionString = process.env.db_string;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use("/users", user_route_1.default);
mongoose_1.default.connect(mongoConnectionString);
const db = mongoose_1.default.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port} --  ${mongoConnectionString}`);
    });
});
