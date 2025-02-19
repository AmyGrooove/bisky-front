type TApiFunction<T> = (page: number) => Promise<T[]>

export type { TApiFunction }
