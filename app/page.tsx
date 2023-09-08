'use client'

import { useTheme } from 'next-themes'
import SvgIcon from '@/app/components/global/SvgIcon'
import Weather from '@/app/components/icons/Weather'

export default function Home() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark')
      setTheme('light')
    else
      setTheme('dark')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => toggleTheme()}>
        <SvgIcon icon={theme === 'dark' ? Weather().Sun : Weather().Moon} />
      </button>
    </main>
  )
}
