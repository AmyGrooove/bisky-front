import st from './QRMobile.module.scss'
import { useQRMobile } from './useQRMobile'

const QRMobile = () => {
  const { setIsEnabled } = useQRMobile()

  return (
    <div className={st.qrWrapper}>
      <div id="scannerContainer"></div>
      <button onClick={() => setIsEnabled(true)}>asd</button>
    </div>
  )
}

export { QRMobile }
