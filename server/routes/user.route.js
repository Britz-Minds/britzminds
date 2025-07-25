const express = require("express");
import {register} from "../controllers/user.controller.js";
const router=express.Router();
router.route("/register").post(register);
router.route("login").post(login);
export default router;