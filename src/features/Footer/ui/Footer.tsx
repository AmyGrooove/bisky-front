import Link from "next/link"

import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms"
import { LogoIcon } from "@shared/icons"

import { IFooterProps } from "../types/IFooterProps"
import { footerLinks } from "../static/footerLinks"

import st from "./Footer.module.scss"

const Footer = (props: IFooterProps) => {
  const { className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div className={st.innerWrapper}>
        <div>
          <Link
            href="https://hunterxhunter.fandom.com/ru/wiki/Бискет_Крюгер"
            target="_blank"
            rel="noopener noreferrer"
            className={st.title}
          >
            <LogoIcon className={st.logo} isDefaultFill={false} />
            <Text weight="700" size="20">
              Bisky
            </Text>
            <Link href="mailto:help@bisky.one" className={st.mail}>
              <Text isDefaultColor={false}>help@bisky.one</Text>
            </Link>
          </Link>
          <Text className={st.subTitle}>
            © {new Date().getFullYear()} Bisky. Все права защищены.
          </Text>
        </div>
        <div className={st.legalWrapper}>
          {footerLinks.map((item) => (
            <Link href={item.link} key={item.link} className={st.legalLink}>
              <Text>{item.name}</Text>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Footer }
