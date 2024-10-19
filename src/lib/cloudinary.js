import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME } from "../config.js";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});
export async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "ecommerce",
    transformation: [
      { width: 500, crop: "scale" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  });
}

export async function deleteImage(publicId) {
  return await cloudinary.uploader.destroy(publicId);
}

