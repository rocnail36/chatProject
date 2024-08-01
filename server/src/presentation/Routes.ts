import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { UserRoutes } from './user/routes';
import { ChatRoutes } from './chats/router';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    // Definir todas mis rutas principales
    router.use('/auth', AuthRoutes.routes )
    router.use("/user",UserRoutes.routes)
    router.use("/chat",ChatRoutes.routes)
    // router.use('/api/user')
    // router.use('/api/products')
    // router.use('/api/clients')
    // router.use('/api/orders')


    return router;
  }


}