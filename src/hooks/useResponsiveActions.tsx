import { useEffect, useState } from 'react'

type ViewportChangeHandler = (isMobile: boolean) => void

export const useViewportChange = (
  breakpoint = 640, // Default to Tailwind's `sm` breakpoint
  onViewportChange?: ViewportChangeHandler,
) => {
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < breakpoint

      // Call the callback function if the view changes
      if (isMobile !== isMobileView) {
        setIsMobileView(isMobile)
        onViewportChange?.(isMobile)
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Call the handler initially to set the correct view
    handleResize()

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileView, breakpoint, onViewportChange])

  return isMobileView
}
