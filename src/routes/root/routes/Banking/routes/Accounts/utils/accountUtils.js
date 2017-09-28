export const getUpdatedAccounts = (accounts, updatedAccount) => {
  return _.map(accounts, (account) => account.id == updatedAccount.id ? updatedAccount : account)
}
