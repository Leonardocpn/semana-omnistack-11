import { Request, Response } from "express";
import { connection } from "../database/connection";
import generateUniqueId from "../utils/generateUniqueId";

export const createOng = async (req: Request, res: Response) => {
  const { name, email, whatsapp, city, uf } = req.body;
  const id = generateUniqueId();

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });
  return res.json({ id });
};

export const listOngs = async (req: Request, res: Response) => {
  const ongs = await connection("ongs").select("*");
  return res.json(ongs);
};
