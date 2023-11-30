"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("@/controllers/user.controller"));
const express_1 = require("express");
const UserRouter = (0, express_1.Router)();
UserRouter.get("/:id", user_controller_1.default.getUserById);
exports.default = UserRouter;
