export const getCurrencyStringFromNumber = (amount, withDecimals) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency: "USD",
    maximumFractionDigits: withDecimals ? 2 : 0,
    roundingIncrement: 5
  }).format(amount);
}
export const capitalizeString = (string) => {
  return string[0].toUpperCase() + string.substring(1);
}

export const translateCondition = (string) => {
  if(string === "new") return "Nuevo"
  else return "Usado"
};

export const replaceBreakingSpaces = (string) => {
  return string.replaceAll('\n', '<br>');
}