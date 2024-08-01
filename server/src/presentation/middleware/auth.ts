import { NextFunction, Request, Response } from 'express';
import { JWT } from '../../config/jwt';
import { User } from '../../database/models/User';




export class AuthMiddleware {

    

  static validateJWT = async(req: Request, res: Response, next: NextFunction ) => {

    const authorization = req.header('Authorization');
    if ( !authorization ) return res.status(401).json({ error: 'No token provided' });
    if ( !authorization.startsWith('Bearer ') ) return res.status(401).json({ error: 'Invalid Bearer token' });

    const token = authorization.split(' ').at(1) || '';

    try {

      // todo:
      const payload = await JWT.verifyJWT<{ id: string }>(token);
      if ( !payload ) return res.status(401).json({ error: 'Invalid token' });

    
    


      req.body.user = payload;


      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }




  }


}