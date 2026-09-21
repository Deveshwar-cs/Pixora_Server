import express from "express";
import upload from "../config/multer.js";
import {
  compressImage,
  improveQuality,
  resizeImage,
  uploadImage,
} from "../controllers/image.controller.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.post("/:imageId/resize", resizeImage);
router.post("/:imageId/compress", compressImage);
router.post("/:imageId/quality", improveQuality);

export default router;
