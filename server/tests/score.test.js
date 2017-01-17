import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';
import Score from '../models/score.model'

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});


// Test Wrapper
describe('## Score API', () => {
    // setup user1
    let user1 = {
    username: 'test',
    password: '123456',
    email: 'test@test.de'
  };

  // create user1
  describe('# POST /api/users', () => {
    it('should create a new user', (done) => {
      request(app)
        .post('/api/users')
        .send(user)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.username).to.equal(user.username);
          user._id = res.body._id;
          done();
        })
        .catch(done);
    });
  });

  // Login user1
  describe('# POST /api/auth/login', () => {
    it('should log in', (done) => {
      request(app)
        .post('/api/auth/login')
        .send({username:user.username, password: user.password})
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('object');
          expect(res.body.token).to.be.an('string');
          user.token = res.body.token;
          done();
        })
        .catch(done);
    });
  });

  // 
})
