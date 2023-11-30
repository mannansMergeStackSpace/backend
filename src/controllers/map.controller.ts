import mapService from "@/services/map.service";
import { Request, Response } from "express";

const getMapById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const map = await mapService.getMapById(id);
    res.status(200).json(map);
  } catch (error: any) {
    res.status(500).send(error.message);
    // can integrate custom error
  }
};

export default {
  getMapById,
};
