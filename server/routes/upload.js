import express from "express";
import postUploadImage from "../controllers/upload.js";
import conn from "../db/index.js";
let router = express.Router();

router.post("/image", postUploadImage);

export default router;
