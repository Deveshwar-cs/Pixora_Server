import express from "express";
import upload from "../config/multer.js";
import {uploadImage} from "../controllers/image.controller.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);

export default router;
