import { Router } from "express";
import { signUp } from "../controllers/signUp.controller.js";
import { signIn } from "../controllers/signIn.controller.js";
import authMiddleware from "../middlewares/auth.js";
import { userProfile } from "../controllers/profile.controller.js";
import { getUsers } from "../controllers/users.controller.js";
import { fileUpload } from "../controllers/fileUpload.controller.js";
import { upload } from "../services/upload.js";
import { inivitation } from "../controllers/invitation.controller.js";

const router = Router();


router.post("/invite", inivitation);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/userProfile", authMiddleware, userProfile);
router.get('/users', authMiddleware, getUsers);
router.post('/fileUpload', upload.single('file'), authMiddleware, fileUpload);

export default router;