export function fitsInOneBox(
  boxes: { l: number; w: number; h: number }[]
): boolean {
  return boxes
    .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
    .every((box, i) => {
      if (i === 0) return true;
      return (
        box.l > boxes[i - 1].l &&
        box.w > boxes[i - 1].w &&
        box.h > boxes[i - 1].h
      );
    });
}
