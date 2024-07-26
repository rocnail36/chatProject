import {Schema,model} from "mongoose"


interface IUser {
    name: string;
    email: string;
    password: string;
  }


const UserSchema = new Schema<IUser>({
    name: {
        type:String,
        require:true

    },
    email: {
        type: String,
        require: true
    },
    password: {
        type:String,
        require:true
    }
  });



export const User = model<IUser>('User', UserSchema);


