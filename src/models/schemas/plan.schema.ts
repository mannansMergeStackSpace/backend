import mongoose from "mongoose";
import PlanInterface from "../../interfaces/plan.interface";
const { Schema } = mongoose;

const PlanSchema = new Schema<PlanInterface>(
  {
    name: String,
    maximumProjects: Number,
    maximumUsers: Number,
    requestsPerMonth: Number,
  },
  { timestamps: true }
);

export default PlanSchema;
