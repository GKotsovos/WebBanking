import _ from 'underscore';

export const getActiveLoan = (loans, activeLoanId) => {
  return _.filter(loans, (loan) => loan.id == activeLoanId)[0];
}

export const getUpdatedLoans = (loans, updatedLoan) => {
  return _.map(loans, (loan) => loan.id == updatedLoan.id ? updatedLoan : loan)
}
