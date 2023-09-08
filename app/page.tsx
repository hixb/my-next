'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import Weather from '@/app/components/icons/Weather'
import SvgIcon from '@/app/components/global/SvgIcon'

export default function Home() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark')
      setTheme('light')
    else
      setTheme('dark')
  }

  const [clientTheme, setClientTheme] = React.useState<() => JSX.Element>(Weather().Moon)

  React.useEffect(() => setClientTheme(theme && theme === 'dark' ? Weather().Sun : Weather().Moon), [theme])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => toggleTheme()}>
        <SvgIcon icon={clientTheme}/>
      </button>
    </main>
  )
}
