import { Request, Router } from "express";
import { AuthMiddleware } from "../middleware/auth";
import { User } from "../../database/models/User";
import { match } from "assert";
import { Chat } from "../../database/models/Chat";




export class ChatRoutes {
   

  static get routes() {
    const router = Router();

    router.get("/:id",AuthMiddleware.validateJWT, async(req:Request,res) => {
        
    const user = await User.findById(req.body.user.id).populate({path:"chats",match:{users: req.params.id}}).exec()
       console.log(user?.chats[0])
    if(!user?.chats[0]){

        try {

            const chat = await Chat.create({
                users:[req.body.user.id,req.params.id]
              })
        
             await chat.save()
        
              await User.findByIdAndUpdate(req.body.user.id, { $push: { chats: chat._id } });
              await  User.findByIdAndUpdate(req.params.id, { $push: { chats: chat._id } });
              
              res.status(200).json("listo")
        } catch (error) {
                console.log(error)
        }   



     }
     
      
    } );

    return router;
  }
}
