import mongoose from "mongoose";
const medicalRecordSchema= new mongoose.Schema(
    {
        reportId: {
            type: Number,
            required: true,
            unique: true
        },
        diagnosis:{
            type: String,
            required: true
        },
        diagnosedBy:[
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
            }
        ]
    },{timestamps:true})
export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)