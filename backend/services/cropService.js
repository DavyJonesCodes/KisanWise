const Crop = require("../models/cropModel");

exports.getAllCrs = async () => {
    const crops = await Crop.find({});
    return crops;
}

exports.getCr = async (cropId) => {
    try {
        const crop = await Crop.findById(cropId);
        return crop;
    } catch (error) {
        console.log(error);
        return false;
    }
}

exports.addCr = async (cropData) => {
    const crop = new Crop(cropData);
    const savedCrop = await crop.save();
    return savedCrop;
};

exports.updateCr = async (cropId, cropData) => {
    try {
        const updatedCrop = await Crop.findByIdAndUpdate(cropId, cropData, { new: true, runValidators: true });
        return updatedCrop;
    } catch (error) {
        console.log(error);
        return false;
    }
};

exports.deleteCr = async (cropId) => {
    try {
        const deletedCrop = await Crop.findByIdAndDelete(cropId);
        return deletedCrop;
    } catch (error) {
        console.log(error);
        return false;
    }
};

