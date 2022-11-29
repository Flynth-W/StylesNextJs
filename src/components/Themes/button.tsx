import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <div>
      <div> The current theme is: {theme} </div>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setTheme('blue')}>Blue Mode</button>
    </div>
  )
}

