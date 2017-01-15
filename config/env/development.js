export default {
  env: 'development',
  MONGOOSE_DEBUG: true,
  jwt: {
    secret: process.env.JWT_SECRET || '382a4b7a5745454f3b44346d27744b2d305b3b58394f4d75375e7d7670',
  },
  oauth: {
    google: {
      clientID: '465909145526-24o6vi7usjb15h7d0k82u1crhlvcaed0.apps.googleusercontent.com',
      clientSecret: 'ov0JPJIiAy8g4A7rYgUdc27S',
      callbackURL: 'http://localhost:4000/api/auth/google/callback'
    },
  },
  db: 'mongodb://localhost:27017/sports-challenge',
  port: 4000,
  domain: 'http://localhost',
  frontend: 'http://localhost:3000'
};
