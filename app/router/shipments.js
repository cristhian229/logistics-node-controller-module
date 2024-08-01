import { Router } from "express";
import { getAll, insert, update, remove } from "../controllers/shipmentsController.js";

const shipmentRouter = Router();

shipmentRouter.get("/", getAll);
shipmentRouter.post("/", insert);
shipmentRouter.put("/:id", update)
shipmentRouter.delete("/:id", remove)



export default shipmentRouter;