import mongoose from "mongoose";

export default interface ContributorInterface {
  projectId: mongoose.Types.ObjectId;
  contributorId: mongoose.Types.ObjectId;
}
