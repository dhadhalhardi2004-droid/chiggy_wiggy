import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import path from "path";
import userRouter  from "./routes/userRoutes.js";



// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static(path.join(process.cwd(),"uploads")));
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("API is working...");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

//mongodb+srv://Admin:Varuneemongodb@cluster0.dg0zs5r.mongodb.net/?appName=Cluster0