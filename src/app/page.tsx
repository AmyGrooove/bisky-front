'use client'

import { Switch } from '@shared/ui/atoms/Switch'
import { useState } from 'react'

const Home = () => {
  const [a, b] = useState(true)

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

        <Switch value={a} onChange={b} variant="big" />
      </div>
    </>
  )
}

export default Home
