type TResponse<T extends (...args: any) => any> = Awaited<ReturnType<T>>

export type { TResponse }
