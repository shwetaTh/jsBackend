import mongoose from "mongoose";
const patientSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        diagnosedWith:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        bloodGroud:{
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["M", "F", "Other"],
            required:true
        },
        admittedIn:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
        reportId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"MedicalRecord"
        }
    },{timestamps: true})
export const Patient = mongoose.model("Patient", patientSchema)    