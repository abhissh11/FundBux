import Campaign from "../models/campaigns-model.js";
import { errorHandler } from "../utils/error.js";

export const postCampaigns = async (req, res, next) => {
  const { title, description, target } = req.body;

  if (!title || !description || !target) {
    return next(errorHandler(400, "Please provide all the required details!"));
  }

  const newCampaign = new Campaign({
    ...req.body,
    userId: "temp-user",
  });

  try {
    const savedCampaign = await newCampaign.save();
    res.status(201).json(savedCampaign);
  } catch (error) {
    next(error);
  }
};

// get campaigns
export const getCampaigns = async (req, res, next) => {
  try {
    const campaigns = await Campaign.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    });

    const totalCampaigns = await Campaign.countDocuments();

    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthCampaigns = await Campaign.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });
    res.status(200).json({
      campaigns,
      totalCampaigns,
      lastMonthCampaigns,
    });
  } catch (error) {
    next(error);
  }
};
