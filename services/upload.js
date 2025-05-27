import cloudinary from "../config/config.js";
import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';


const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: 'chat_uploads',
        resource_type: 'auto',
        public_id: `${Date.now()}-${file.originalname}`
    })
});

export const upload = multer({ storage });
