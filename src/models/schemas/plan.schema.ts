import PlanInterface from "@/interfaces/plan.interface";
import mongoose from "mongoose";
const { Schema } = mongoose;

const PlanSchema = new Schema<PlanInterface>(
  {
    name: String,
    maximumProjects: Number,
    maximumUsers: Number,
    requestsPerMonth: Number,
    price: Number,
  },
  { timestamps: true }
);

export default PlanSchema;
