export function wrapping(gifts: string[]) {
  return gifts.map((gift: string) => {
    const giftSize: number = gift.length + 2;

    const wrapper: string = `${'*'.repeat(giftSize)}`;

    return `${wrapper}\n*${gift}*\n${wrapper}`;
  });
}
