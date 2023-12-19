

import mongoose from "mongoose";

const requestProduct = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    productId: {
      type: String
    },
    userEmail: {
      type: String
    },
    productName:{
        type: String,
        required:true
    },
    fullName: {
      type: String,
      required: true,
    },
    productItem:{
        type: Number,
        required: true
    },
    remark:{
        type: true,
    },
    requestAt:{
        type: Date,
        //required: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("requestProduct", bookingSchema);
