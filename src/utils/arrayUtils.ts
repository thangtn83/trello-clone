export function findItemIndexById<T extends { id: string }>(
  array: T[],
  id: string
) {
  return array.findIndex((item) => item.id === id);
}
export function removeItemAtIndex<T>(array: T[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertItemAtIndex<T>(array: T[], item: T, index) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export function moveItem<T>(array: T[], from: number, to: number) {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
}
