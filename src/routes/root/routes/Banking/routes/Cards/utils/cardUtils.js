export const getUpdatedCards = (cards, updatedCard) => {
  return cards.map(card => card.id == updatedCard.id ? updatedCard : card)
}

export const getUpdatedDebitCards = (debitCards, updatedDebitCard) => {
  return debitCards.map(debitCard => debitCard.debitCard.id == updatedDebitCard.id ? updatedDebitCard : debitCard)
}
