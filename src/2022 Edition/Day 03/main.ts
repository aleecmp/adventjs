export function distributeGifts(
  packOfGifts: string[],
  reindeers: string[]
) {
  const packWeight: number = packOfGifts.reduce(
    (acc: number, curr: string) => acc + curr.length,
    0
  );

  const maxWeight: number = reindeers.reduce(
    (acc: number, curr: string) => acc + 2 * curr.length,
    0
  );

  return Math.floor(maxWeight / packWeight);
}
