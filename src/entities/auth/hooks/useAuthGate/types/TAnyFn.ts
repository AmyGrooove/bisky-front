type TAnyFn<T extends any[] = any[]> = (...args: T) => void | Promise<void>

export type { TAnyFn }
