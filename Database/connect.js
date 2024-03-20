import { mongoose, Schema } from "mongoose";
import dotenv from "dotenv";
const connectdb = async () => {
    //   try {
    //     mongoose.connect("mongodb://localhost:27017/banhang");
    //     console.log("Connected to MongoDB succsefuly");
    //   } catch (err) {
    //     console.log("Can not accses MongoDB ");
    //   }
    // };
    try {
        const url = dotenv.config().parsed.DB_URL;
        const connect = await mongoose.connect(url);
        console.log(`Connected to MongoDB succsefuly`);
    } catch (err) {
        console.log(`Can not accses MongoDB `);
    }
};
export default connectdb