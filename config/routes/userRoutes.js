import express from "express";

import { createNewUser, LoginUser } from "../../src/api/v1/controllers/usersController.js";


import { validateParametersUser } from "../../middlewares/validateParametersUser.js";
import { validateParametersLogin } from "../../middlewares/validateParametersLogin.js";

import { getActivity } from "../../middlewares/reports.js";


const router = express.Router();


router.post("/usuarios", validateParametersUser, getActivity, createNewUser)
router.post("/login", validateParametersLogin, getActivity, LoginUser )
router.post("/login", isLogin , getActivity, GetUser )

export default router;