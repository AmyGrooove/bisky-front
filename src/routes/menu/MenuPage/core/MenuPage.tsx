import { FactCard } from '@entities/fact/ui/FactCard'
import { BigButton } from '@shared/ui/molecules/BigButton'
import Link from 'next/link'

import { MENU_LINKS } from '../static/MENU_LINKS'

import st from './MenuPage.module.scss'
import { useMenuPage } from './useMenuPage'
import { SettingsButton } from './SettingsButton'

const MenuPage = async () => {
  const { randomFact, pageVariant } = await useMenuPage()

  return (
    <div className={st.root}>
      {MENU_LINKS.map((linkArray, index) => (
        <div key={index} className={st.buttonsWrapper}>
          {linkArray.map((link) =>
            link.href === '/settings' ? (
              <SettingsButton key={link.href} />
            ) : (
              <Link key={link.href} href={link.href} className={st.buttonLink}>
                <BigButton
                  className={st.button}
                  variant={link.variant}
                  Icon={link.Icon}
                >
                  {link.name}
                </BigButton>
              </Link>
            ),
          )}
        </div>
      ))}
      <FactCard
        variant={pageVariant}
        author={randomFact.author}
        source={randomFact.source}
        text={randomFact.text}
      />
    </div>
  )
}

export { MenuPage }
