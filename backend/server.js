import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
