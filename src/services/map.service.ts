import { MapModel } from "@/models";
import mongoose from "mongoose";

const getMapById = async (id: string) => {
  const map = await MapModel.findById(id); // aggregation will return array with 1 user if Id matched
  if (!map) {
    throw new Error("Map not found");
  }
  return map;
};

export default { getMapById };
