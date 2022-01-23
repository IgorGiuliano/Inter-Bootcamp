import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express(); 

//  Configurações da aplicação
app.use(express.json());

//  Configurações de rotas
app.use(statusRoute);
app.use(usersRoute);

// Inicialização do servidor
app.listen(3000, () => {
    console.log("Aplicação rodando na porta " + 3000);
});