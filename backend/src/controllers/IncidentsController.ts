import { Request, Response } from "express";
import { connection } from "../database/connection";

export const createIncident = async (req: Request, res: Response) => {
  const { title, description, value } = req.body;
  const ong_id = req.headers.authorization;

  const [id] = await connection("incidents").insert({
    title,
    description,
    value,
    ong_id
  });
  return res.json({ id });
};

export const listIncidents = async (req: Request, res: Response) => {
  let { page = 1 } = req.query;

  const [count] = await connection("incidents").count();

  const incidents = await connection("incidents")
    .join("ongs", "ongs.id", "=", "incidents.ong_id")
    .limit(5)
    .offset((page - 1) * 5)
    .select([
      "incidents.*",
      "ongs.name",
      "ongs.email",
      "ongs.whatsapp",
      "ongs.city",
      "ongs.uf"
    ]);

  res.header("X-Total-Count", count["count(*)"]);
  return res.json(incidents);
};

export const deleteIncidents = async (req: Request, res: Response) => {
  const { id } = req.params;
  const ong_id = req.headers.authorization;

  const incident = await connection("incidents")
    .where("id", id)
    .select("ong_id")
    .first();

  if (incident.ong_id !== ong_id) {
    return res.status(401).json({ error: "Operation not permitted" });
  }

  await connection("incidents")
    .where("id", id)
    .delete();

  return res.status(204).send();
};

export const listIncidentsForAnOng = async (req: Request, res: Response) => {
  const ong_id = req.headers.authorization;

  const incidents = await connection("incidents")
    .where("ong_id", ong_id)
    .select("*");

  return res.json(incidents);
};
