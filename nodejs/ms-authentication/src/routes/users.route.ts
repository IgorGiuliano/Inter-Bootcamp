import { Router, Request, Response, NextFunction } from 'express';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction)=>{
    const users = await userRepository.findAllUsers();
    res.status(200).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    try {
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
    
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(201).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser)

    res.sendStatus(200);
});

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(200);
});

export default usersRoute;