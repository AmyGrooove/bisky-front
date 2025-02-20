interface IGlobalError {
  error: Error & { digest?: string }
  reset: () => void
}

export type { IGlobalError }
