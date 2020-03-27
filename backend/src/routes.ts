import express from "express";
import { createOng, listOngs } from "./controllers/OngController";
import {
  createIncident,
  listIncidents,
  deleteIncidents,
  listIncidentsForAnOng
} from "./controllers/IncidentsController";
import { login } from "./controllers/SessionController";

export const routes = express.Router();

routes.post("/ongs", createOng);
routes.get("/ongs", listOngs);

routes.post("/incidents", createIncident);
routes.get("/incidents", listIncidents);
routes.delete("/incidents/:id", deleteIncidents);
routes.get("/profile", listIncidentsForAnOng);

routes.post("/session", login);
