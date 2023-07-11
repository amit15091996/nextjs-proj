import { User } from '@/models/user';
import moongoose from 'mongoose'
export const connectDB = async () => {
    try {
        const { connection } = await moongoose.connect(process.env.MONGO_DB_URL, {
        const { connection } = await moongoose.connect(process.env.MONGO_DB_URL, {
            dbName: 'work_manager',
        })
        console.log("connected....to mongo db");
        // console.log(connection);

        //testing 

      const user =  new User({
            name:'test',
            email:'test@gmail.com',
            password:'test',
            about:'this is testing'
        });
        await user.save();
        console.log('user created');

    } catch (error) {
        console.log("error msg : ",error);
        console.log("failed...");
    }
}