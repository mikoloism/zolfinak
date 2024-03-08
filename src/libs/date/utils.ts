export function reorder<T extends unknown[]>(list: T, index: number): T {
  const _list = [...list];
  return _list.slice(index, _list.length).concat(_list.slice(0, index)) as T;
}
