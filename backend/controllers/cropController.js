const cropService = require("../services/cropService");

const getAllCrops = async (req, res) => {
    try {
        const data = await cropService.getAllCrops();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCrop = async (req, res) => {
    try {
        let cropId = req.params.id;
        const data = await cropService.getCrop(cropId);
        if(data == false){
            res.status(404).json({status: "error",message: "Crop not found"});
        }else{
            res.json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addCrop = async (req, res) => {
    try {
        let cropData = req.body;
        const data = await cropService.addCrop(cropData);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCrop = async (req, res) => {
    try {
        let cropId = req.params.id;
        let cropData = req.body;
        const data = await cropService.updateCrop(cropId, cropData);
        if(data == false){
            res.status(404).json({status: "error",message: "Crop not found"});
        }else{
            res.json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCrop = async (req, res) => {
    try {
        let cropId = req.params.id;
        const data = await cropService.deleteCrop(cropId);
        if(data == false){
            res.status(404).json({status: "error",message: "Crop not found"});
        }else{
            res.json({message: "Crop deleted successfully"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports= {addCrop, updateCrop, getAllCrops, getCrop, deleteCrop}