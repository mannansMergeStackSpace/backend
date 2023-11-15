import { Request, Response } from "express";
import UserService from "../services/user.service";

const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await UserService.getUserById(id);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send(error.message);
    // can integrate custom error
  }
};

export default {
  getUserById,
};
