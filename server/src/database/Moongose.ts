import { envs } from "../config/Env";

const mongoose = require('mongoose');



export class MoongoseDb {

    

    static async connect(uri:string){
       try {
        await mongoose.connect(uri,{
            dbName:"Chat"
        });
        console.log("moongose conected")
       } catch (error) {
         console.log("error database",error)
         throw error
       }
    }


}