import { linkTo } from 'routes/root/routes/Banking/modules/banking';

export const linkToProperTransferForm = (bankType) => {
  switch (bankType) {
    case 'agileBank':
      linkTo('/banking/transfers/toAgileBank')
      break;
    case 'domesticBank':
      linkTo('/banking/transfers/toDomesticBank')
      break;
    case 'foreignBank':
      linkTo('/banking/transfers/toForeignBank')
      break;
  }
}
