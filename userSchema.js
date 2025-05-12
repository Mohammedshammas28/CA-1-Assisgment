const mongoose=require("mongoose")

const userSchema=require (mongoose.schema)


Username:{
    type:String,
    required:True;
},
Email:{
    type:String,
    required:True,
},

Password:{
    Type:String,
    required:True,
},







exports.module=userSchema;


