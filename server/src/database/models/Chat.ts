import mongoose, {Schema,model} from "mongoose"


interface Ichat {
    message_id:mongoose.Schema.Types.ObjectId[]
  }


const UserSchema = new Schema<Ichat>({

    message_id: {
        type: [{type:mongoose.Schema.Types.ObjectId, ref:"Message"}]
    }
    
  });



export const User = model<Ichat>('Chat', UserSchema);
