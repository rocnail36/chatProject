import mongoose, {Schema,model} from "mongoose"


interface Imessage {
    text: string
    user_id:mongoose.Schema.Types.ObjectId 
  }


const UserSchema = new Schema<Imessage>({
    text: {
        type:String,
        require:true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }

  });



export const User = model<Imessage>('Message', UserSchema);
