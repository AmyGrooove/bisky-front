import { memo } from 'react'
import { PageLink } from '@shared/ui/molecules/PageLink'
import { HintMenu } from '@shared/ui/molecules/HintMenu'
import { Button } from '@shared/ui/molecules/Button'
import { PlusIcon } from '@shared/icons'
import { NotificationButton } from '@entities/notification/ui/NotificationButton'

import st from './MobileHeader.module.scss'
import { useMobileHeader } from './useMobileHeader'

const MobileHeader = memo(() => {
  const { currentMenu, isMenuOpened, convertedMenuLinks, setIsMenuOpened } =
    useMobileHeader()

  return (
    <div className={st.root}>
      <HintMenu
        items={convertedMenuLinks}
        placement="bottom-start"
        onOpenChange={setIsMenuOpened}
      >
        <PageLink
          isChevronEnabled
          isAlwaysHovered
          isSelected={isMenuOpened}
          variant="mobileHeader"
        >
          {currentMenu}
        </PageLink>
      </HintMenu>
      {currentMenu === 'Главная' && <NotificationButton />}
      {currentMenu === 'Коллекции' && (
        <Button
          className={st.addButton}
          Icon={<PlusIcon />}
          onClick={() => alert('В разработке')}
          variant="small"
        >
          Создать коллекцию
        </Button>
      )}
    </div>
  )
})

MobileHeader.displayName = 'MobileHeader'

export { MobileHeader }
