'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import SvgIcon from '@/app/components/general/SvgIcon'
import { useIcon } from '@/app/utils/useIcons'

export default function ChangeTheme() {
  const icon = useIcon()
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark')
      setTheme('light')
    else
      setTheme('dark')
  }

  const [clientTheme, setClientTheme] = React.useState(icon.weather.moon(25))

  React.useEffect(() => setClientTheme(theme && theme === 'dark' ? icon.weather.sun(25) : icon.weather.moon(25)), [theme])

  return (
    <SvgIcon onClick={toggleTheme} icon={() => clientTheme}></SvgIcon>
  )
}
