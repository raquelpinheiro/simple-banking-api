const AccountService = require('../domain/services/accountService');
const CreateAccountViewModel = require('../controllers/viewModels/createAccountViewModel');
const WithdrawViewModel = require('../controllers/viewModels/withdrawViewModel');

exports.eventsToAccount = (req, res, next) => {
  let id = 0;
  const amount = req.body.amount;
  const type = req.body.type;
  let service = new AccountService();
  if (type === 'deposit') {
    id = Number(req.body.destination);
    let account = service.createAccount(id);
    if (account) {
      service.depositAccount(account, amount);
      res.status(201).json(new CreateAccountViewModel(account));
    }
  } else if (type === 'withdraw') {
    id = Number(req.body.origin);
    let account = service.getAccountById(id);
    if (!account) {
      res.status(404).json(0);
    } else {
      service.withdraw(account, amount);
      res.status(201).json(new WithdrawViewModel(account));
    }
  }
};
exports.findAccount = (req, res, next) => {
  const id = Number(req.query.account_id);
  let service = new AccountService();
  const account = service.getAccountById(id);
  if (!account) {
    res.status(404).json(0);
  } else {
    res.status(200).json(account.balance);
  }
};
