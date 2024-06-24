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
