import { Text } from '@shared/ui/atoms/Text'

import st from './WhatIsTemporaryModal.module.scss'

const WhatIsTemporaryModal = () => {
  return (
    <div className={st.root}>
      <div className={st.segment}>
        <Text className={st.textMain} weight="700">
          Полноценный доступ
        </Text>
        <Text className={st.text}>
          Временный аккаунт ничем не ограничен — вы можете смотреть аниме,
          добавлять в избранное и пользоваться всеми функциями сайта
        </Text>
      </div>
      <div className={st.separator} />
      <div className={st.segment}>
        <Text className={st.textMain} weight="700">
          Автоматическое удаление
        </Text>
        <Text className={st.text}>
          Если вы не заходите в аккаунт в течение 6 месяцев, он будет удалён
        </Text>
      </div>
      <div className={st.separator} />
      <div className={st.segment}>
        <Text className={st.textMain} weight="700">
          Переход в постоянный аккаунт
        </Text>
        <Text className={st.text}>
          Позже вы сможете привязать почту, добавить пароль или подключить
          сторонний сервис — аккаунт станет постоянным, и данные сохранятся
        </Text>
      </div>
      <div className={st.separator} />
      <div className={st.segment}>
        <Text className={st.textMain} weight="700">
          Настройки профиля
        </Text>
        <Text className={st.text}>
          Никнейм и аватар можно менять в любой момент, как и в обычном аккаунте
        </Text>
      </div>
    </div>
  )
}

export { WhatIsTemporaryModal }
