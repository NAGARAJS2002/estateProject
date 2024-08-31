import expres from "express";
import { signin, signup } from "../controllers/authController.js";


const router = expres.Router();

router.post('/signup',signup)
router.post('/signin',signin)

export default router;