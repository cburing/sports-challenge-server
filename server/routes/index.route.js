import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import scoreRoutes from './score.route';

function routeProvider(passport) {
    const router = express.Router();
    router.use('/users', userRoutes(passport));
    router.use('/auth', authRoutes(passport));
    router.use('/score', scoreRoutes(passport));
    return router;
}


export default routeProvider;
