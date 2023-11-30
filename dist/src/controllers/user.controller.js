"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("@/services/user.service"));
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await user_service_1.default.getUserById(id);
        res.status(200).send({ user });
    }
    catch (error) {
        res.status(500).send(error.message);
        // can integrate custom error
    }
};
exports.default = {
    getUserById,
};
