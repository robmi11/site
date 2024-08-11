export function formatPopulation(population) {
  return new Intl.NumberFormat("en-US").format(population)
}