import express from "express";
import { postCampaigns } from "../controllers/Campaign-controller.js";

const router = express.Router();

router.post("/create", postCampaigns);

export default router;
