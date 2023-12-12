import { useEffect, useState } from 'react'

type TScreenType = 'mobile' | 'tablet' | 'desktop' | ''
export const useResize = () => {
  const [screenType, setScreenType] = useState<TScreenType>('')

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth

      if (currentWidth >= 1441) {
        setScreenType('desktop')
      } else if (currentWidth >= 769) {
        setScreenType('tablet')
      } else {
        setScreenType('mobile')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenType])
  return screenType
}
