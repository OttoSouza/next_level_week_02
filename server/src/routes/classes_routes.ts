import express from "express";
import ClasseControlle from "../controllers/ClassesController"
const classes_routes = express.Router();
const controleClass = new ClasseControlle();

classes_routes.get("/", controleClass.index );
classes_routes.post("/", controleClass.create );

export default classes_routes;

