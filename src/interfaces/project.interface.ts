import mongoose from "mongoose";

export default interface ProjectInterface {
  name: string;
  type: string; // can add enum here
  domain: string;
  userId: mongoose.Types.ObjectId;
}
