import AppModelsEnum from "@/constants/enums/models.enum";
import ContributorInterface from "@/interfaces/contributor.interface";
import PlanInterface from "@/interfaces/plan.interface";
import ProjectInterface from "@/interfaces/project.interface";
import RequestInterface from "@/interfaces/request.interface";
import UserInterface from "@/interfaces/user.interface";
import { model } from "mongoose";
import ContributorSchema from "./schemas/contributor.schema";
import PlanSchema from "./schemas/plan.schema";
import ProjectSchema from "./schemas/project.schema";
import RequestSchema from "./schemas/request.schema";
import UserSchema from "./schemas/user.schema";

const PlanModel = model<PlanInterface>(AppModelsEnum.PLAN, PlanSchema);
const RequestModel = model<RequestInterface>(
  AppModelsEnum.REQUEST,
  RequestSchema
);
const UserModel = model<UserInterface>(AppModelsEnum.USER, UserSchema);
const ProjectModel = model<ProjectInterface>(
  AppModelsEnum.PROJECT,
  ProjectSchema
);
const ContributorModel = model<ContributorInterface>(
  AppModelsEnum.CONTRIBUTOR,
  ContributorSchema
);

export { PlanModel, RequestModel, UserModel, ProjectModel, ContributorModel };
