import express from "express";

import { createNewUser, loginUser, getUser } from "../../src/api/v1/controllers/usersController.js";


import { validateParametersUser } from "../../middlewares/validateParametersUser.js";
import { validateParametersLogin } from "../../middlewares/validateParametersLogin.js";
import { authToken } from "../../middlewares/authToken.js"

import { getActivity } from "../../middlewares/reports.js";


const router = express.Router();


router.post("/usuarios", validateParametersUser, getActivity, createNewUser)
router.post("/login", validateParametersLogin, getActivity, loginUser )
router.get("/usuarios", authToken, getActivity, getUser )

export default router;