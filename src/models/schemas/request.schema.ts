import AppModelsEnum from "@/constants/enums/models.enum";
import RequestInterface from "@/interfaces/request.interface";
import { Schema } from "mongoose";

const RequestSchema = new Schema<RequestInterface>(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: AppModelsEnum.PROJECT,
    },
    method: String,
    url: String,
  },
  { timestamps: true }
);

export default RequestSchema;
