import AppModelsEnum from "@/constants/enums/models.enum";
import ContributorInterface from "@/interfaces/contributor.interface";
import { Schema } from "mongoose";

const ContributorSchema = new Schema<ContributorInterface>(
  {
    contributorId: {
      type: Schema.Types.ObjectId,
      ref: AppModelsEnum.USER,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: AppModelsEnum.PROJECT,
    },
  },
  { timestamps: true }
);
export default ContributorSchema;
