"use client"

import { Button } from "@/01-shared/ui/Button"

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <html>
      <body>
        {error.message}
        <Button onClick={() => reset()}>Повторить</Button>
      </body>
    </html>
  )
}

export default GlobalError
