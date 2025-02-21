import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { cn } from '@shared/utils/functions'
import Image from 'next/image'
import { useAdultModal } from './useAdultModal'
import st from './AdultModal.module.scss'

const AdultModal = () => {
  const { noClick, yesClick } = useAdultModal()

  return (
    <div className={st.root}>
      <Text weight="700" className={st.title}>
        Вам есть 18 лет?
      </Text>
      <Image
        src="/images/biskyFinger.png"
        alt="biskyFinger"
        width={200}
        height={200}
        className={st.image}
      />
      <Text className={st.description}>
        Закрывая модальное окно, вы подтверждаете, что вам исполнилось 18 лет
      </Text>
      <div className={st.buttonWrapper}>
        <Button
          className={cn(st.button, st.button_no)}
          onClick={noClick}
          variant="big"
        >
          Нет (｡╯︵╰｡)
        </Button>
        <Button
          className={cn(st.button, st.button_yes)}
          onClick={yesClick}
          variant="big"
        >
          Да (ಠ⌣ಠ)
        </Button>
      </div>
    </div>
  )
}

export { AdultModal }
