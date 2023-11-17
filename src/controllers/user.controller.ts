import userService from "@/services/user.service";
import { Request, Response } from "express";

const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    res.status(200).send({ user });
  } catch (error: any) {
    res.status(500).send(error.message);
    // can integrate custom error
  }
};

export default {
  getUserById,
};
