import app from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./config/database.js";

dotenv.config({ path: 'backend/.env' })

connectDB()

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})