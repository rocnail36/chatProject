import mongoose, {Schema,model} from "mongoose"


interface Ichat {
    message_id:mongoose.Schema.Types.ObjectId[]
    users:mongoose.Schema.Types.ObjectId[]
  }


const UserSchema = new Schema<Ichat>({

    message_id: {
        type: [{type:mongoose.Schema.Types.ObjectId, ref:"Message"}]
    },

    users:{
          type:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}]
    }
    
  });



export const Chat = model<Ichat>('Chat', UserSchema);
