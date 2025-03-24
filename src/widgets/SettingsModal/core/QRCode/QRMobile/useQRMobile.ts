import { useEffect, useState } from 'react'
import { Html5Qrcode } from 'html5-qrcode'

const useQRMobile = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 200, height: 200 } }
    const htmlQRCode = new Html5Qrcode('scannerContainer')

    const qrScannerStop = () => {
      if (htmlQRCode && htmlQRCode.isScanning) {
        htmlQRCode
          .stop()
          .then(() => console.log('Scanner stop'))
          .catch(() => console.log('Scanner error'))
      }
    }

    const qrCodeSuccess = (decodedText: string) => {
      console.log(decodedText)
      setIsEnabled(false)
    }

    if (isEnabled) {
      htmlQRCode.start(
        { facingMode: 'environment' },
        config,
        qrCodeSuccess,
        qrScannerStop,
      )
    } else {
      qrScannerStop()
    }

    return () => {
      qrScannerStop()
    }
  }, [isEnabled])

  return { isEnabled, setIsEnabled }
}

export { useQRMobile }
