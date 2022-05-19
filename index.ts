export function capitalize<T extends string>(value: string): Capitalize<T> {
  const result = value.charAt(0).toUpperCase() + value.slice(1);
  return result as Capitalize<T>;
}
