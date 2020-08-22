import express from 'express';
import {Request, Response} from "express"
const user_routes = express.Router()

user_routes.get("/", (request: Request, response:Response) => {
  return response.send("Otto")
})

export default user_routes; 