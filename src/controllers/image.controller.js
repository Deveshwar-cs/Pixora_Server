import sharp from "sharp";
import Image from "../models/image.models.js";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    const metadata = await sharp(req.file.path).metadata();

    const image = await Image.create({
      originalName: req.file.originalname,
      fileName: req.file.filename,
      mimeType: req.file.mimetype,
      size: req.file.size,
      width: metadata.width,
      height: metadata.height,
      path: req.file.path,
    });

    return res.status(201).json({
      success: true,
      message: "Image uploaded succcessfully",
      image: {
        id: image._id,
        originalName: image.originalName,
        fileName: image.fileName,
        mimeType: image.mimeType,
        size: image.size,
        width: metadata.width,
        height: metadata.height,
        path: req.file.path,
      },
    });
  } catch (error) {
    console.log("Upload image error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload image",
    });
  }
};
