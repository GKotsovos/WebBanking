import { getCustomerName } from 'routes/root/routes/Banking/routes/utils/commonUtils';

export const initProperOrderForm = (activeOrderType, initNewTransferOrderForm, initNewPaymentOrderForm) => {
  switch (activeOrderType) {
    case 'transfer':
      initNewTransferOrderForm();
      break;
    case 'payment':
      initNewPaymentOrderForm();
      break;
  }
}

export const getBeneficiaryName = (beneficiaryAccountype, beneficiaryBankType, state) => {
  let customerName = '';
  if (beneficiaryAccountype == 'isAccount' && beneficiaryBankType == 'agileBank') {
    customerName = getCustomerName(state.banking.customerName)
  }
  return customerName;
}
