import mongoose, { Schema } from "mongoose";
import AppModelsEnum from "../../constants/enums/models.enum";
import RequestInterface from "../../interfaces/request.interface";

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
