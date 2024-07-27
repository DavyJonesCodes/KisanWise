const cropSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tips: { type: String, required: true },
    imageUrl: { type: String, required: true}
});