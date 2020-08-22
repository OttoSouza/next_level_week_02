import express from 'express';
import user_routes from './user_routes';
import classes_router from './classes_routes';
import connections_routes from './connection_routes';

const routes = express.Router()

routes.use('/users', user_routes);
routes.use('/classes', classes_router);
routes.use('/connections', connections_routes);


export default routes; 