const AccountService = require('../../src/domain/services/accountService');

test('Should given a new account instance when has the same Id', () => {
  let accountService = new AccountService();
  let account = accountService.createAccount(1);
  let accountSameId = accountService.createAccount(1);
  expect(account).toBe(accountSameId);
});

test('Should keep the same account and update the balance', () => {
  let accountService = new AccountService();
  let account = accountService.createAccount(2);
  accountService.depositAccount(account, 100);
  let accountSameId = accountService.createAccount(2);
  accountService.depositAccount(account, 200);
  expect(account).toBe(accountSameId);
  expect(account.getBalance()).toEqual(300);
  expect(accountSameId.getBalance()).toEqual(300);
});

test('Should get account by Id when account exists', () => {
  let accountService = new AccountService();
  let account = accountService.createAccount(1);
  let accountFound = accountService.getAccountById(account.id);
  expect(accountFound).not.toBeNull();
  expect(account.id).toEqual(accountFound.id);
});

test('Should withdraw amount from the account', () => {
  let accountService = new AccountService();
  let account = accountService.createAccount(1);
  accountService.depositAccount(account, 25);
  accountService.withdraw(account, 5);
  expect(account.getBalance()).toEqual(20);
});
test('Should transfer amount between two accounts', () => {
  let accountService = new AccountService();
  let account1 = accountService.createAccount(3);
  accountService.depositAccount(account1, 10);
  let account2 = accountService.createAccount(4);

  accountService.depositAccount(account2, 20);
  accountService.transfer(account2, 5, account1);
  expect(account1.balance).toEqual(15);
  expect(account2.balance).toEqual(15);
});
test('Shouldn"t deposit to account when amount is not a number', () => {
  let accountService = new AccountService();
  let account = accountService.createAccount(5);
  accountService.depositAccount(account, 'aaa');
  expect(account.getBalance()).toEqual(0);
});
test('Shouldn"t find an account when id is not a number', () => {
  let accountService = new AccountService();
  let account = accountService.getAccountById('--');
  expect(account).toBeNull();
});
test('Shouldn"t withdraw account when amount is not a number type', () => {
  let accountService = new AccountService();
  let account = accountService.createAccount(6);
  accountService.depositAccount(account, 10);
  accountService.withdraw(account, '10');
  expect(account.getBalance()).toEqual(10);
});

test('Shouldn"t transfer to account when destination account is undefined', () => {
  let accountService = new AccountService();
  let account = accountService.createAccount(1);
  const balance = account.getBalance();
  accountService.transfer(account, 0, undefined);
  expect(balance).toEqual(account.getBalance());
});
