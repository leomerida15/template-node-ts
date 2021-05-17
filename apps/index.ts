// Modules
import express, { Application, Request, Response } from 'express';
import { posRutes, preRoutes } from '../Middlewares';
import Routes from '../routes';

const app: Application = express();

//database
// import '../db/';

// middleware preRoutes
preRoutes(app);
app.use(express.json());

// Routes
Routes(app);

// meddleware posRutes
posRutes(app);

// Settings
app.set('port', process.env.PORT || 5050);

export default app;
