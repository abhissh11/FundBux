import express from "express";
import {
  getCampaigns,
  postCampaigns,
} from "../controllers/Campaign-controller.js";

const router = express.Router();

router.post("/create", postCampaigns);
router.get("/getCampaigns", getCampaigns);

export default router;
