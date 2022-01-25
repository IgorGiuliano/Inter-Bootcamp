import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';

const app = express(); 

//  Configurações da aplicação
app.use(express.json());

//  Configurações de rotas
app.use(statusRoute);
app.use(authorizationRoute);

app.use(jwtAuthenticationMiddleware)
app.use(usersRoute);

//  Configuraçôes de Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log("Aplicação rodando na porta " + 3000);
});