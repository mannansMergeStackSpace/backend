import { MapInterface } from "@/interfaces/map.interface";
import { Schema } from "mongoose";

const MapSchema = new Schema<MapInterface>(
  {
    config: Object,
    datasets: Array,
    info: Object,
  },
  { timestamps: true }
);
export default MapSchema;
