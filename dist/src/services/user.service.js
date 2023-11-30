"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("@/models");
const mongoose_1 = __importDefault(require("mongoose"));
const getUserById = async (id) => {
    const pipeline = userAggregationPipeline(id);
    const user = await models_1.UserModel.aggregate(pipeline); // aggregation will return array with 1 user if Id matched
    if (!user.length) {
        throw new Error("User not found");
    }
    return user[0];
};
const userAggregationPipeline = (id) => [
    { $match: { _id: new mongoose_1.default.Types.ObjectId(id) } },
    {
        $lookup: {
            from: "plans",
            localField: "currentPlan",
            foreignField: "_id",
            as: "plan",
        },
    },
    {
        $lookup: {
            from: "projects",
            localField: "_id",
            foreignField: "userId",
            as: "projects",
        },
    },
    {
        $lookup: {
            from: "requests",
            localField: "projects._id",
            foreignField: "projectId",
            as: "requests",
        },
    },
    {
        $lookup: {
            from: "contributors",
            localField: "projects._id",
            foreignField: "projectId",
            as: "contributors",
        },
    },
    {
        $lookup: {
            from: "users",
            localField: "contributors.contributorId",
            foreignField: "_id",
            as: "contributors",
        },
    },
    {
        $project: {
            plan: {
                $arrayElemAt: ["$plan", 0],
            },
            projects: 1,
            contributors: 1,
            requests: 1,
        },
    },
];
exports.default = {
    getUserById,
};
