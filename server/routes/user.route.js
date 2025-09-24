import express from "express";
import jwtCheck from "../middlewares/auth0.js";
import { saveUser } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/save", jwtCheck, saveUser);

export default userRoute;
