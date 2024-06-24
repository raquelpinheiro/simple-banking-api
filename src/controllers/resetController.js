const AccountsSingleton = require('../domain/accountsSingleton');

exports.reset = (req, res, next) => {
  AccountsSingleton.resetInstance();
  res.status(200).send('OK');
};
