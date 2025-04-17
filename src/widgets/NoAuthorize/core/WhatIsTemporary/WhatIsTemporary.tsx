import { Text } from '@shared/ui/atoms/Text'

import st from './WhatIsTemporary.module.scss'

const WhatIsTemporary = () => {
  return (
    <div className={st.root}>
      <div className={st.segment}>
        <Text className={st.textMain} weight="700" isCustomColor>
          Полноценный доступ
        </Text>
        <Text className={st.text}>
          Временный аккаунт ничем не ограничен — вы можете смотреть аниме,
          добавлять в избранное и пользоваться всеми функциями сайта
        </Text>
      </div>
      <div className={st.separator} />
      <div className={st.segment}>
        <Text className={st.textMain} weight="700" isCustomColor>
          Автоматическое удаление
        </Text>
        <Text className={st.text}>
          Если вы не заходите в аккаунт в течение 6 месяцев, он будет удалён
        </Text>
      </div>
      <div className={st.separator} />
      <div className={st.segment}>
        <Text className={st.textMain} weight="700" isCustomColor>
          Переход в постоянный аккаунт
        </Text>
        <Text className={st.text}>
          Позже вы сможете привязать почту, добавить пароль или подключить
          сторонний сервис — аккаунт станет постоянным, и данные сохранятся
        </Text>
      </div>
      <div className={st.separator} />
      <div className={st.segment}>
        <Text className={st.textMain} weight="700" isCustomColor>
          Настройки профиля
        </Text>
        <Text className={st.text}>
          Никнейм и аватар можно менять в любой момент, как и в обычном аккаунте
        </Text>
      </div>
    </div>
  )
}

export { WhatIsTemporary }
