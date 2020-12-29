import mongoose from "mongoose";
const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const fruits = mongoose.model("fruits", fruitsSchema);
export default fruits;
