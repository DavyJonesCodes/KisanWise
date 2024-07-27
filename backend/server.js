const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5001;


const cropController = require("./controllers/cropController");

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>{ 
        console.log("MongoDB connected")
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log(err));

// Define Routes

//Crop Routes
app.get("/api/crops", cropController.getAllCrops);
app.get("/api/crops/:id", cropController.getCrop);
app.post("/api/crops", cropController.addCrop);
app.put("/api/crops/:id", cropController.updateCrop);
app.delete("/api/crops/:id", cropController.deleteCrop);



