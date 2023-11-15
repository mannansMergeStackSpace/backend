import mongoose from "mongoose";

export default interface UserInterface {
  name: string;
  email: string;
  currentPlan?: mongoose.Types.ObjectId;
}
