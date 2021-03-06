const bar = (value, maxValue, maxBarLength) => {
  const fractions = ['▏', '▎', '▍', '▋', '▊', '▉'];
  const barLength = value * maxBarLength / maxValue;
  const wholeNumberPart = Math.floor(barLength);
  const fractionalPart = barLength - wholeNumberPart;
  let bar = fractions[fractions.length - 1].repeat(wholeNumberPart);
  if (fractionalPart > 0)
    bar += fractions[Math.floor(fractionalPart * fractions.length)];
  return bar;
}

const chart = (data, showValue = true, maxBarLength = 30) => {
  const formatted = Object.keys(data).map(key => ({ key: key, value: data[key] }));
  const object_total = formatted.find(object => object.key === "Total:");
  formatted.splice(formatted.indexOf(object_total), 1);
  formatted.splice(0, 0, object_total);
  
  const sorted = formatted.sort((a, b) => b.value - a.value);
  const maxValue = Math.max(...sorted.map(item => item.value));
  const maxKeyNameLength = Math.max(...sorted.map(item => item.key.length));
  const resultChart = sorted.map(item => {
    const prefix = item.key
    const barText = bar(item.value, maxValue, maxBarLength);
    const suffix = showValue ? ` ${item.value}` : "";
    return "|" + prefix + "|" + barText + suffix + "|";
  });
  resultChart.splice(1,0,"|-|-|");
  return resultChart.join("\n");
}

module.exports = chart;