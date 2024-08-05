import mongoose, {Schema,model} from "mongoose"
import { Imessage } from "./Message";
import { IUser } from "./User";


export interface Ichat {
    message_id: Imessage[]
    users: IUser[]
    modified: Date
  }


const UserSchema = new Schema<Ichat>({

    message_id: {
        type: [{type:mongoose.Schema.Types.ObjectId, ref:"Message"}]
    },

    users:{
          type:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}]
    },

    modified: {
      type: Date
    }

  });



export const Chat = model<Ichat>('Chat', UserSchema);
