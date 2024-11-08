import express from "express";

import {
  getTrendingTv,
  getSimilarTvs,
  getTvDetails,
  getTvTrailers,
  getTvsByCategory,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similarMovies", getSimilarTvs);
router.get("/:category", getTvsByCategory);

export default router;