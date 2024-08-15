export function formatPopulation(population) {
  return new Intl.NumberFormat("en-US").format(population);
}

export function getCurrencies(country) {
  let cur = [];

  for (let key in country) {
    cur.push({ symbol: country[key], key: key });
  }

  return cur.map((item) => `${item.key}: ${item.symbol.symbol}  `);
}

export function getLanguages(country) {
  let lang = [];

  for (let key in country) {
    lang.push(country[key]);
  }

  return lang.map((item) => `${item} `);
}
