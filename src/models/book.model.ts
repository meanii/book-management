import mongoose from "mongoose";


const BookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: false },
}, { timestamps: true  });

const BookModel = mongoose.model(`Book`, BookSchema);

export { BookModel };