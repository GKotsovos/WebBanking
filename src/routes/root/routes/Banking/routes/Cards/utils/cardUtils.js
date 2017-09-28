import _ from 'underscore';

export const getUpdatedCards = (cards, updatedCard) => {
  return _.map(cards, (card) => card.id == updatedCard.id ? updatedCard : card)
}

export const getUpdatedDebitCards = (debitCards, updatedDebitCard) => {
  return _.map(debitCards, (debitCard) => debitCard.debitCard.id == updatedDebitCard.id ? updatedDebitCard : debitCard)
}
