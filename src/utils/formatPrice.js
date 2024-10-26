export function formatPrice(price, currency = 'EUR') {
  const options = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat('en-US', options).format(price).replace(/,/g, '');
}
