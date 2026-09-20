import express from "express";
import upload from "../config/multer.js";
import {resizeImage, uploadImage} from "../controllers/image.controller.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.post("/:imageId/resize", resizeImage);

export default router;
