import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});


async function uploadToCloudinary(filePath) {
    try {
        if(!filePath) return null;
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        });
        // file has been uploaded
        // console.log("File has uploaded","url: ", result.url)
        fs.unlinkSync(filePath); // remove file from server after upload
        return result;
    } catch (error) {
        fs.unlinkSync(filePath); // remove file from server if upload fails
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
}

export { uploadToCloudinary };