const exampleService = require("../services/exampleService");

const getExample = async (req, res) => {
    try {
        const data = await exampleService.getExampleData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports= {getExample}