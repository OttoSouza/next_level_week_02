import express from "express";
import ConnectionsController from "../controllers/ConnectionsControlle";
const connecitonController = new ConnectionsController()

const connections_routes = express.Router();


connections_routes.get("/", connecitonController.index );
connections_routes.post("/", connecitonController.create );

export default connections_routes;

