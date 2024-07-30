import mongoose, {Schema,model} from "mongoose"


export interface IUser {
    name: string;
    email: string;
    password: string;
    chats: mongoose.Schema.Types.ObjectId[]
    usersFriend: mongoose.Schema.Types.ObjectId[]
    toJSON:() => string
    status: "offline" | "connected"
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
        require:true,
      
    },
    status: {
      type: String,
      default:"offline",
      enum: ["offline","connected"]
    },
    chats: {
      type: [{type: mongoose.Schema.Types.ObjectId, ref:'Chat'}]
    },
    usersFriend: [{type:mongoose.Schema.Types.ObjectId,ref: "User"}]
  },{ toJSON: { 
    virtuals: true,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.password;
      delete ret.password_reset;
      return ret;
    }

  }});


  UserSchema.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['password']
        return ret
    }
})



export const User = model<IUser>('User', UserSchema);


