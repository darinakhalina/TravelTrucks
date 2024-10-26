export function formatLocation(location) {
  const [country, city] = location.split(',').map(part => part.trim());
  return `${city}, ${country}`;
}
