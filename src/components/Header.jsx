import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import ThemeToggle from './ThemeToggle'
import { Menu } from 'lucide-react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navigationLinks = [
        { href: "/", label: "Home" },
        { href: "/news?category=world", label: "World" },
        { href: "/news?category=technology", label: "Tech" },
        { href: "/news?category=business", label: "Business" },
        { href: "/news?category=sports", label: "Sports" },
        { href: "/news?category=entertainment", label: "Entertainment" },
    ]

    return (
        <>
            <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95'>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className='flex items-center gap-2 shrink-0'>
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">N</div>
                            <span className='hidden sm:inline font-bold text-lg text-muted-foreground'>News Portal</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className='hidden md:flex gap-1'>
                            {navigationLinks.map((link) => (
                                <Link to={link.href}>
                                    <Button key={link.href} variant='ghost'>
                                        {link.label}
                                    </Button>
                                </Link>
                            ))}
                        </nav>

                        {/* Right Action Buttons */}
                        <div className="flex items-center gap-2">
                            <ThemeToggle />
                            {/* Mobile Menu Button */}
                            <Button
                                variant='ghost'
                                size='icon'
                                className='md:hidden'
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label='Toggle Menu'
                            >
                                <Menu className='w-5 h-5' />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <nav className='md:hidden flex flex-col gap-1 pb-4'>
                            {navigationLinks.map((link) => (
                                <Button
                                    key={link.href}
                                    variant='ghost'
                                    className='justify-start'
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link to={link.href}>{link.label}</Link>
                                </Button>
                            ))}
                        </nav>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header
