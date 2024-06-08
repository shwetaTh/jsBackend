import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        address:{
            addressline1:{
                city:{
                    type: String
                },
                street:{
                    type: String
                },
                houseNo:{
                    type: String
                },
                required: true,

            },
            addressline2:{
                city:{
                    type: String
                },
                street:{
                    type: String
                }
                
            },
            required: false
        }
    }
    ,{timestamps:true})
export const User = mongoose.model("User", userSchema)    