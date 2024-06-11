'use client'

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {

    const pathname = usePathname()

    const topbarRef = useRef<HTMLDivElement>(null)


    const [scroll, setscroll] = useState(0);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setscroll(currentScrollPos)
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ss = useMemo(() => {
        return scroll
    }, [scroll])

    const routes = [
        { title: "HOME", link: "/" },
        { title: "MUSIC", link: "/music" },
        { title: "APPAREL", link: "/apparel" },
        { title: "ALL ITEMS", link: "/items" },
        { title: "CONTACT", link: "/contact" },
        { title: "MAIN SITE", link: "http://cecewinans.com/" }
    ]

    return <nav className={cn(`fixed text-white z-50 top-0 w-full [&>*]:transition-all duration-300`,
        { "bg-blue-800/60 backdrop-blur-md": ss > 10 },
    )} style={{ transform: `translateY(-${ss > 10 ? topbarRef.current?.clientHeight : 0}px)` }}>
        <div className="py-3 w-full bg-[#FF71A0] text-center" ref={topbarRef}>
            <Link href={'#'} className="font-semibold text-xs sm:text-sm md:text-base px-2">OFFICIAL MERCHANDISE</Link>
        </div>
        <div className={cn('w-full py-2 sm:py-7 bg-[#6C5E68]', { "py-2 sm:py-5": ss > 10 })}>
            <MaxWidthWrapper className='flex justify-between'>
                <div className="flex items-center gap-10">
                    <img src="/cece-logo.png" alt="cece winins logo" className={cn('w-40 sm:w-52 lg:w-72 xl:w-80 object-contain transition-all duration-300', { 'w-52 sm:w-64 lg:w-80 xl:w-[26rem]': ss <= 10 })} />
                    <div className="hidden min-[900px]:flex items-center gap-3 xl:gap-5">
                        {routes.map((route, i) => <Link key={i} href={route.link} className={cn('text-[rgb(235,209,227)]',{'underline text-white': pathname == route.link})}>{route.title}</Link>)}
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Search size={30} strokeWidth={1} />
                    <ShoppingBag size={30} strokeWidth={1} />
                </div>
            </MaxWidthWrapper>
        </div>
    </nav>
}

export default Navbar