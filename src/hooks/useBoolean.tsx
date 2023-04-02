import { useEffect, useState } from 'react'

export const useBoolean = () => {
  const [isResponsive, setIsResponsive] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 576)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isResponsive }
}
