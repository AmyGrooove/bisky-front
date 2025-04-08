import { BigButton } from '@shared/ui/molecules/BigButton'
import { EyeIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'
import { QRCodeSVG } from 'qrcode.react'

import { useQRDesktop } from './useQRDesktop'
import st from './QRDesktop.module.scss'

const QRDesktop = () => {
  const { newToken, isQRActive, setIsQRHidden } = useQRDesktop()

  return (
    <div className={cn(st.root, { [st.root_active]: isQRActive })}>
      <QRCodeSVG
        value={newToken}
        size={240}
        bgColor="var(--dark-100)"
        fgColor="var(--bisky-100)"
        marginSize={2}
        imageSettings={{
          src: '/favicons/favicon-192x192.png',
          height: 48,
          width: 48,
          excavate: true,
        }}
        title="signInToken"
      />
      <div className={st.qrButtonWrapper}>
        <BigButton
          Icon={EyeIcon}
          onClick={() => setIsQRHidden((prev) => !prev)}
        >
          {isQRActive ? 'Скрыть' : 'Показать'}
        </BigButton>
      </div>
    </div>
  )
}

export { QRDesktop }
