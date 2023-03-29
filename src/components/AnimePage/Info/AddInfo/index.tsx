import { useContext } from 'react'

import { AnimeInfoContext } from '..'

import styles from './index.module.scss'
import TypeStatus from './TypeStatus'
import Episodes from './Episodes'
import Genres from './Genres'
import OtherInfo from './OtherInfo'

const AddInfo = () => {
  const { status } = useContext(AnimeInfoContext)

  return (
    <div className={styles.addInfo}>
      <TypeStatus />
      <span className={styles.addInfo__br} />
      {status !== 'anons' && <Episodes />}
      <Genres />
      <span className={styles.addInfo__br} />
      <OtherInfo />
    </div>
  )
}

export default AddInfo
