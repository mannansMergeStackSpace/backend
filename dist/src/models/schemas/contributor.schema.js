"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_enum_1 = __importDefault(require("@/constants/enums/models.enum"));
const mongoose_1 = require("mongoose");
const ContributorSchema = new mongoose_1.Schema({
    contributorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: models_enum_1.default.USER,
    },
    projectId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: models_enum_1.default.PROJECT,
    },
}, { timestamps: true });
exports.default = ContributorSchema;
