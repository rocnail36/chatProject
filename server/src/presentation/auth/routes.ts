import { Router } from 'express';
import { AuthDatasourceImpl } from '../../structure/dataSources/AuthDataSourceImpl';
import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { AuthRepositoryImpl } from '../../structure/repositories/AuthRepositorieImpl';
import { AuthController } from './controller';






export class AuthRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(datasource);

    const controller = new AuthController(authRepository);

    // Definir todas mis rutas principales
    
    router.post('/register', controller.register.bind(controller))
    router.post('/login', controller.login.bind(controller))
   
    
    


    return router;
  }


}