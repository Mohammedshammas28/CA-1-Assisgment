const mongoose=require("mongoose")
const express=require("express")
const app=express();
const userSchema=require("userSchema")
dotenv.config()
app.use=(express.json)


const Port=(process.env.PORT)

mongoose.Schema.({})





app.post('./signup',async()=>{
   try {
    if(!Username){
        console.log("Username cannot be empty")
    }
    else if(!email){
        console.log("Email cannot be empty")

    }
    else if(!Password>8 && Password<=16){
        console.log("Password length should be greater than 8 or less than or equal to 16")
    }
    res.status
   } catch (error) {
    console.log("your data is incorrect")
   

   } 
})








app.listen(Port,async()=>{
    try {
        console.log(`server is running on http//localhost/:${PORT}`)

    } catch (error) {
        console.log("internal server error")

    }
})

