"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_enum_1 = __importDefault(require("@/constants/enums/models.enum"));
const mongoose_1 = require("mongoose");
const RequestSchema = new mongoose_1.Schema({
    projectId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: models_enum_1.default.PROJECT,
    },
    method: String,
    url: String,
}, { timestamps: true });
exports.default = RequestSchema;
