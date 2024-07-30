import { Router } from "express";
import { getAll, insert, update, remove } from "../controllers/warehouseController.js";

const warehouseRouter = Router();

warehouseRouter.get("/", getAll);
warehouseRouter.post("/", insert);
warehouseRouter.put("/:id", update)
warehouseRouter.delete("/:id", remove)



export default warehouseRouter;