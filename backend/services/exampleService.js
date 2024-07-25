const Example = require("../models/exampleModel");

exports.getExampleData = async () => {
    return await Example.find();
};
