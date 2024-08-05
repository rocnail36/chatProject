import mongoose, {Schema,model} from "mongoose"


export interface Imessage {
    text: string
    user_id:mongoose.Schema.Types.ObjectId 
    modified: Date
  }


const UserSchema = new Schema<Imessage>({
    text: {
        type:String,
        require:true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },

    modified: {
      type: Date,
    }
  });



export const Message = model<Imessage>('Message', UserSchema);
