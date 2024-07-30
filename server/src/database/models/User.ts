import mongoose, {Schema,model} from "mongoose"


interface IUser {
    name: string;
    email: string;
    password: string;
    chats: mongoose.Schema.Types.ObjectId[]
    usersFriend: mongoose.Schema.Types.ObjectId[]
  }


const UserSchema = new Schema<IUser>({
    name: {
        type:String,
        require:true

    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type:String,
        require:true
    },
    chats: {
      type: [{type: mongoose.Schema.Types.ObjectId, ref:'Chat'}]
    },
    usersFriend: [{type:mongoose.Schema.Types.ObjectId,ref: "User"}]
  });



export const User = model<IUser>('User', UserSchema);


