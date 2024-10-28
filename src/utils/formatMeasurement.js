export function formatMeasurement(measurement) {
  return measurement.replace(/(\d+\.?\d*)([ml])/g, '$1 $2');
}
