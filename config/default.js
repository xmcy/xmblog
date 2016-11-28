module.exports = {
  port: 3000,
  session: {
    secret: 'xmblog',
    key: 'xmblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/xmblog'
};