// SDK utility types
export type NonNullableUsage<T> = {
  [K in keyof T]-?: NonNullable<T[K]>
}
