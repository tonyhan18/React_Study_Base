import express from "express";
import { postUsers, postUsersToken } from "../controllers/users.js";
import conn from "../db/index.js";

let router = express.Router();

/* GET users listing. */
// return msg
router.post("/", postUsers);
router.post("/token", postUsersToken);

export default router;
