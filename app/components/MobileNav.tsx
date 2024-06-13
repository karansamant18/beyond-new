
import Link from 'next/link';
import React from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void;
}
const MobileNav = ({ nav, closeNav }: Props) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"
    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>

            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <Link href="">Explore</Link>
                <Link href="">News</Link>
                <Link href="">Research</Link>
                <Link href="">Webinars</Link>
                <Link href="">BlinkX Speaks</Link>
                <Link href="">Knowledge centre</Link>
                <Link href="">About us</Link>
            </div>
            <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
                {/* <XMarkIcon /> */}

            </div>
        </div>
    )
}

export default MobileNav