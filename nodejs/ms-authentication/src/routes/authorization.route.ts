import { NextFunction, Request, Response, Router } from 'express';
import JwT from 'jsonwebtoken';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error.model';

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware,async (req:Request, res:Response, next: NextFunction) => {
    try {
        const user = req.user;

        if(!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_sercret_key';

        const jwt = JwT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(200).send({ token: jwt });
    } catch (error) {
        next(error);
    }

});

export default authorizationRoute;