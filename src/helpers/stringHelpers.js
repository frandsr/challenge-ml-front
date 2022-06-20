export const getCurrencyStringFromNumber = (amount, withDecimals) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency: "USD",
    maximumFractionDigits: withDecimals ? 2 : 0,
    roundingIncrement: 5
  }).format(amount);
}