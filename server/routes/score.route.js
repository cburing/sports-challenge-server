import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import scoreCtrl from '../controllers/score.controller';

function routeProvider(passport) {

    const router = express.Router();

    router.route('/')
      .post(passport.authenticate('jwt', {
          session: false
      }), scoreCtrl.create)
      
    return router;
}

export default routeProvider;