import { UserModel } from "@/models";
import mongoose from "mongoose";

const getUserById = async (id: string) => {
  const pipeline = userAggregationPipeline(id);
  const user = await UserModel.aggregate(pipeline); // aggregation will return array with 1 user if Id matched
  if (!user.length) {
    throw new Error("User not found");
  }
  return user[0];
};

const userAggregationPipeline = (id: string) => [
  { $match: { _id: new mongoose.Types.ObjectId(id) } },
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
  { $limit: 1 },
];

export default {
  getUserById,
};
