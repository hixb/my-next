import React from 'react'
import { useWindowSize } from 'react-use'

export function useScreen() {
  enum ScreenSize {
    SM = 640,
    MD = 768,
    LG = 1024,
    XL = 1280,
  }

  const { width } = useWindowSize()
  const lessThanMD = React.useMemo(() => width <= ScreenSize.MD, [width])

  return {
    ScreenSize,
    screenWidth: width,
    lessThanMD,
  }
}
