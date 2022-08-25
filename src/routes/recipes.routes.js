import { Router } from "express";
import {
  addRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipesById,
  updateRecipe,
} from "../controllers/recipes.controller";
const router = Router();

router.post("/", addRecipe);

router.get("/", getAllRecipes);

router.get("/:id", getRecipesById);

router.patch("/update/:id", updateRecipe);

router.delete("/delete/:id", deleteRecipe);

export default router;
