'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import SvgIcon from '@/app/components/general/SvgIcon'
import Weather from '@/app/components/icons/Weather'

export default function ChangeTheme() {
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
    <SvgIcon onClick={toggleTheme} icon={clientTheme}></SvgIcon>
  )
}
