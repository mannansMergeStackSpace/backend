import AppModelsEnum from "@/constants/enums/models.enum";
import UserInterface from "@/interfaces/user.interface";
import { Schema } from "mongoose";

const UserSchema = new Schema<UserInterface>(
  {
    name: String,
    email: String,
    currentPlan: {
      type: Schema.Types.ObjectId,
      ref: AppModelsEnum.USER,
    },
  },
  { timestamps: true }
);
export default UserSchema;
