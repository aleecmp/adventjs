export function countHours(year: number, holidays: string[]) {
  return (
    holidays.filter((holiday: string) =>
      [1, 2, 3, 4, 5].includes(new Date(`${holiday}/${year}`).getDay())
    ).length * 2
  );
}
