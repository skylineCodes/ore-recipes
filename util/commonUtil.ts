export const generatePrice = (l: string): number => {
  const zero = '0';
  const length = `9${zero.repeat(Number(l))}`;
  const activationPin = Math.floor(1000 + Math.random() * Number(length));

  return activationPin;
};

export const currencySeparator = (money: any) => {
  return money?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const currencyRemoveSeparator = (money: any) => {
  return money?.replace(',', '');
};

export const trunc = function (string: string | undefined, length: number) {
  return (
    string?.substring(0, length - 1) + (string !== undefined && string.length > length ? '...' : '')
  );
};
