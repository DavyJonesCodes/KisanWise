const { deleteCrop } = require("../controllers/cropController");
const Crop = require("../models/cropModel");

const getAllCrops = async () => {
    const crops = await Crop.find({});
    return crops;
}

const getCrop = async (cropId) => {
    try {
        const crop = await Crop.findById(cropId);
        return crop;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const addCrop = async (cropData) => {
    const crop = new Crop(cropData);
    const savedCrop = await crop.save();
    return savedCrop;
};

const updateCrop = async (cropId, cropData) => {
    try {
        const updatedCrop = await Crop.findByIdAndUpdate(cropId, cropData, { new: true, runValidators: true });
        return updatedCrop;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const deleteCrop = async (cropId) => {
    try {
        const deletedCrop = await Crop.findByIdAndDelete(cropId);
        return deletedCrop;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = { addCrop, updateCrop, getAllCrops, getCrop, deleteCrop }
