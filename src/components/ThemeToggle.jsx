import React from 'react'
import Button from '../ui/Button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function ThemeToggle() {
  const {theme, setTheme} = useTheme()

  return (
    <>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setTheme( theme ==="dark" ? "light" : "dark")}
        aria-label= 'Toggle Theme'
        className='w-10 h-10 flex justify-center items-center'
      >
        {theme === "dark"
            ? <Sun className='w-5 h-5' />
            : <Moon className='w-5 h-5' />
        }
      </Button>     
    </>
  )
}

export default ThemeToggle
