'use client'

import { AniBattleErrorModal } from '@entities/apps/ui/AniBattleErrorModal'
import { setModal } from '@widgets/ModalWrapper'

const Home = async () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: '#170e19',
          width: '100%',
        }}
      >
        <h1 style={{ color: 'white' }}>Сайт в доработке</h1>
        <p style={{ color: 'white' }}>Мы работаем над улучшением сайта.</p>
        <p style={{ color: 'white' }}>Пожалуйста, вернитесь позже.</p>
        <img src="/images/biskyLook.png" alt="" width={200} />
        <button onClick={() => setModal(<AniBattleErrorModal />)}>
          asdasd
        </button>
      </div>
    </>
  )
}

export default Home
