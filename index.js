dotenv.config();
connectDB();
import express, { json } from "express";
import RecipeRoutes from "./src/routes/recipes.routes";
import cors from "cors";
import connectDB from "./src/Models/dbconnect";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(json());

app.use("/api/recipes", RecipeRoutes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
