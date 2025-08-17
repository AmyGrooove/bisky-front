'use client'

import { SectionSelector } from '@shared/ui/organisms/SectionSelector'

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

        <SectionSelector
          items={[
            { children: '213', value: '123' },
            { children: '111', value: '412' },
          ]}
          activeTab={'123'}
          onSwitchTab={() => {}}
          variant="dynamic"
        />
      </div>
    </>
  )
}

export default Home
