import { Router } from "express";
import DiscenteController from "../../controller/DiscenteController";

const discenteRoutes = Router();

discenteRoutes.post("/save", DiscenteController.create);
discenteRoutes.get("/", DiscenteController.findAll);
discenteRoutes.get("/:id", DiscenteController.findById);
discenteRoutes.put("/:id", DiscenteController.update);

export default discenteRoutes;