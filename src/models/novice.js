import mongoose from "mongoose";

const NoviceSchema = new mongoose.Schema(
    {
        id: {type: String},
        date_initial: { type: Date, required: true },
        date_final: { type: Date, required: true },
        
    }
)

const Novice = mongoose.model('novice', NoviceSchema);
export default Novice;