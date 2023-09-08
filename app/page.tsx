'use client'

import { useTheme } from 'next-themes'
import SvgIcon from '@/app/components/global/SvgIcon'

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
      <button className="w-52 h-32 rounded" onClick={() => toggleTheme()}>
        toggle theme
      </button>
      <SvgIcon icon={'audio/subtitle'} />
    </main>
  )
}
