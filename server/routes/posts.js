import express from "express";
import { getPostsMain } from "../controllers/posts.js";
let router = express.Router();

router.get("/main", getPostsMain);

export default router;
