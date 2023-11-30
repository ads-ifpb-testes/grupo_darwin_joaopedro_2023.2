import { Router } from "express";
import EmpresaController from "../../controller/EmpresaController";

const empresaRoutes = Router();

empresaRoutes.post("/save", EmpresaController.create);
empresaRoutes.get("/", EmpresaController.findAll);
empresaRoutes.get("/:id", EmpresaController.findById);
empresaRoutes.put("/:id", EmpresaController.update);

export default empresaRoutes;