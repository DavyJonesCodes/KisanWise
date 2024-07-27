const cropService = require("../services/cropService");

exports.getAllCrops = async (req, res) => {
    try {
        const data = await cropService.getAllCrs();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCrop = async (req, res) => {
    try {
        let cropId = req.params.id;
        const data = await cropService.getCr(cropId);
        if(!data){
            res.status(404).json({status: "error",message: "Crop not found"});
        }else{
            res.json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.addCrop = async (req, res) => {
    try {
        let cropData = req.body;
        const data = await cropService.addCr(cropData);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCrop = async (req, res) => {
    try {
        let cropId = req.params.id;
        let cropData = req.body;
        const data = await cropService.updateCr(cropId, cropData);
        if(!data){
            res.status(404).json({status: "error",message: "Crop not found"});
        }else{
            res.json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCrop = async (req, res) => {
    try {
        let cropId = req.params.id;
        const data = await cropService.deleteCr(cropId);
        if(!data){
            res.status(404).json({status: "error",message: "Crop not found"});
        }else{
            res.json({message: "Crop deleted successfully"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
