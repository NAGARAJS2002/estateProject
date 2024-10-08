import expres from "express";
import { google, signin,  signOut, signup } from "../controllers/authController.js";


const router = expres.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);
router.get('/signout',signOut);

export default router;