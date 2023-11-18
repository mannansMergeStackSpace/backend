import AppModelsEnum from "@/constants/enums/models.enum";
import ProjectInterface from "@/interfaces/project.interface";
import { Schema } from "mongoose";

const ProjectSchema = new Schema<ProjectInterface>(
  {
    name: String,
    type: String, // can add enum here
    domain: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: AppModelsEnum.USER,
    },
  },
  { timestamps: true }
);

export default ProjectSchema;
