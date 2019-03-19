export const getActiveLoan = (loans, activeLoanId) => {
  return loans.filter(loan => loan.id == activeLoanId)[0];
}

export const getUpdatedLoans = (loans, updatedLoan) => {
  return loans.map(loan => loan.id == updatedLoan.id ? updatedLoan : loan)
}
