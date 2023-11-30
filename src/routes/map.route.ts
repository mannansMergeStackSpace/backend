import mapController from "@/controllers/map.controller";
import { Router } from "express";

const MapRouter = Router();

MapRouter.get("/:id", mapController.getMapById);

export default MapRouter;
