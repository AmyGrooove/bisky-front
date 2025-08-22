import { PageLink } from '@shared/ui/molecules/PageLink'
import { HintMenu } from '@shared/ui/molecules/HintMenu'
import { Button } from '@shared/ui/molecules/Button'
import { PlusIcon } from '@shared/icons'

import st from './MobileHeader.module.scss'
import { useMobileHeader } from './useMobileHeader'
import { NotificationButton } from '@entities/notification/NotificationButton'

const MobileHeader = () => {
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
          Icon={PlusIcon}
          onClick={() => {}}
          variant="small"
        >
          Создать коллекцию
        </Button>
      )}
    </div>
  )
}

export { MobileHeader }
