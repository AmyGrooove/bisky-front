import styles from './index.module.scss'

const Player = () => {
  return (
    <section className={styles.player}>
      <div className={styles.player__window}>
        <div className={styles.player__window__player}></div>
      </div>
    </section>
  )
}

export default Player
