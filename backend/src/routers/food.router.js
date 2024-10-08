import { Router } from "express";
import { sample_foods } from "../data.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_foods);
});

router.get("/:foodId", (req, res) => {
  const { foodId } = req.params;
  const food = sample_foods.find((item) => item.id === foodId);
  res.send(food);
});

export default router;
