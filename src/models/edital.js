import mongoose from "mongoose";

const EditalSchema = new mongoose.Schema(
    {
        id: {type: String},
        initial_date: { type: Date, required: true },
        final_date: { type: Date, required: true },
        edital_file: {type: String},
        idDraws:{type: mongoose.Schema.Types.ObjectId, red: "draws"}

    }
)

const Edital = mongoose.model('edital', EditalSchema);
export default Edital;