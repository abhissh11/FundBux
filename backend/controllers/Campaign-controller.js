import Campaign from "../models/campaigns-model.js";
import { errorHandler } from "../utils/error.js";

export const postCampaigns = async (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return next(errorHandler(411, "Please provide all the required details!"));
  }

  const newCampaign = new Campaign({
    ...req.body,
    userId: req.user.id,
  });

  try {
    const savedCampaign = await newCampaign.save();
    res.status(201).json(savedCampaign);
  } catch (error) {
    next(error);
  }
};
