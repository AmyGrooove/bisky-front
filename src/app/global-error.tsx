"use client"

import Button from "@/components/Common/Button"

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
