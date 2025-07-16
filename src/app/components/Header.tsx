'use client';
import Link from 'next/link'
import Logo from './logo'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();
    const items = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Service', href: '/service' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full transition-all duration-300 z-50 ${isSticky
            ? 'fixed top-0 left-0 bg-main/60 shadow-lg backdrop-blur-xl border-b border-white/20'
            : 'bg-main relative'}`}>
            <div className='container mx-auto'>
                <div className='hidden sm:block px-5'>
                    <nav className='flex items-center justify-between py-5 w-full'>
                        <Link href="/" className="w-40">
                            <Logo />
                        </Link>
                        <div>
                            <ul className='flex items-center justify-around gap-5 text-white'>
                                {
                                    items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`pb-2 hover:border-b transition-all duration-100 linear ${pathname === item.href ? 'border-b-2 border-white font-bold' : ''}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Responsive UI */}
                <div className='sm:hidden px-5'>
                    <nav className='flex items-end justify-between py-5 w-full'>
                        <Link href="/" className="w-32">
                            <Logo />
                        </Link>

                        <div>
                            <Sheet>
                                <SheetTrigger>
                                    <FaBars className='w-8 h-8 text-white' />
                                </SheetTrigger>
                                <SheetContent className='bg-main text-white'>
                                    <SheetHeader>
                                        <SheetDescription>
                                            <div className='flex flex-col gap-10 justify-center'>
                                                <div className='flex justify-center'>
                                                    <Link href="/" className="w-32">
                                                        <Logo />
                                                    </Link>
                                                </div>
                                                <ul className='flex flex-col items-center gap-5 text-white'>
                                                    {
                                                        items.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className={`pb-2 hover:border-b transition-all duration-100 linear ${pathname === item.href ? 'border-b-2 border-white font-bold' : ''}`}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header