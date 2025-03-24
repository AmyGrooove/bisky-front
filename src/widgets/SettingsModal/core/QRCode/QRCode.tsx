import st from './QRCode.module.scss'
import { Text } from '@shared/ui/atoms/Text'
import { QRDesktop } from './QRDesktop/QRDesktop'
import { QRMobile } from './QRMobile/QRMobile'

const QRCode = () => {
  return (
    <div className={st.root}>
      <Text className={st.text}>
        {`Для авторизации вы можете отсканировать QR-код с мобильного устройства. 
        Кнопка сканирования доступна в этом же разделе на мобильном устройстве.`}
      </Text>
      <QRDesktop />
      <QRMobile />
    </div>
  )
}

export { QRCode }
