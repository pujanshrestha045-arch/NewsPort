import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <>
            <footer className="bg-card border-t border-border py-12 mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* About */}
                        <div>
                            <h3 className='font-bold mb-4 text-muted-foreground'>About News Portal</h3>
                            <p className='text-sm text-muted-foreground'>Stay informed with breaking news, world news, technology, business, sports, and entertainment updates.</p>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className='font-bold mb-4 text-muted-foreground'>Categories</h3>
                            <ul className='text-sm space-y-2'>
                                <li>
                                    <Link to="/news?category=world" className='text-muted-foreground hover:text-primary'>World</Link>
                                </li>
                                <li>
                                    <Link to="/news?category=technology" className='text-muted-foreground hover:text-primary'>Technology</Link>
                                </li>
                                <li>
                                    <Link to="/news?category=business" className='text-muted-foreground hover:text-primary'>Business</Link>
                                </li>
                                <li>
                                    <Link to="/news?category=sports" className='text-muted-foreground hover:text-primary'>Sports</Link>
                                </li>
                                <li>
                                    <Link to="/news?category=entertainment" className='text-muted-foreground hover:text-primary'>Entertainment</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className='font-bold mb-4 text-muted-foreground'>Legal</h3>
                            <ul className='text-sm space-y-2'>
                                <li>
                                    <Link to="#" className='text-muted-foreground hover:text-primary'>Privacy Policy</Link>
                                </li>

                                <li>
                                    <Link to="#" className='text-muted-foreground hover:text-primary'>Terms of Service</Link>
                                </li>

                                <li>
                                    <Link to="#" className='text-muted-foreground hover:text-primary'>Cookie Policy</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className='font-bold mb-4 text-muted-foreground'>Legal</h3>
                            <ul className='text-sm space-y-2 text-muted-foreground'>
                                <li>Email: info@newsportal.com</li>
                                <li>Phone: +977 01-2345678</li>
                                <li>Address: 123 News Street, Media City, MC 12345</li>
                            </ul>
                        </div>

                        {/* Bottom Bar */}
                        <div>
                            <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                                <p>{currentYear} News Portal. All rights reserved.</p>
                                <p>Built with react</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
