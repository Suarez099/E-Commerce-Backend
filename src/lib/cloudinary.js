import { v2 as cloudinary } from "cloudinary";
import { API_SECRET, API_KEY, CLOUD_NAME } from "../config.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
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

