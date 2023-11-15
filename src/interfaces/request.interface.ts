import mongoose from "mongoose";
import requestMethod from "../constants/types/requestMethod.type";

export default interface RequestInterface {
  projectId: mongoose.Types.ObjectId;
  method: requestMethod;
  url?: string; // for Api resource
  // we can add as much detail as we need.
}
