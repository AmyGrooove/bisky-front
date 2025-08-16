'use client'

import { MoreInfo } from '@shared/ui/molecules/MoreInfo/core/MoreInfo'

const Home = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#170e19',
        }}
      >
        <h1 style={{ color: 'white' }}>Сайт в доработке</h1>
        <p style={{ color: 'white' }}>Мы работаем над улучшением сайта.</p>
        <p style={{ color: 'white' }}>Пожалуйста, вернитесь позже.</p>
        <img src="/images/biskyLook.png" alt="" width={200} />

        <MoreInfo>dsadasd</MoreInfo>
      </div>
    </>
  )
}

export default Home
