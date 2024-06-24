import Link from 'next/link';
import React from 'react';
import { blinkxBlack } from '@/lib/fonts';
import { barlow } from '@/lib/fonts';
import Image from 'next/image';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div className={`fixed inset-0 z-[10000] ${nav ? 'block' : 'hidden'}`}>
            <div onClick={closeNav} className="fixed inset-0 bg-black opacity-50"></div>
            <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 bottom-0 bg-[#ffffff] w-[86vw] z-[10001]`}>
                <div className="flex items-center p-4 border-b border-gray-200">
                    <Image src="/profile_pic.svg" alt="Profile Photo" width={60} height={20} className="mx-2 rounded-full" />
                    <div className="ml-4 flex flex-col">
                        <span className={`text-lg font-bold font-barlow ${barlow.className}`}>John Doe</span>
                        <button className="mt-2 px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded-full flex items-center">
                            <i className="fas fa-save mr-2 "></i>
                            Saved
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mx-10 my-10 space-y-4">
                    <h1 className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F26F21] to-[#EC0C6E] text-xl text-black ${blinkxBlack.className}`}>Beyond with BlinkX</h1>
                    <Link href="" className="font-semibold font-barlow text-[#14212A]">Explore</Link>
                    <Link href="" className="font-semibold font-barlow text-[#394653]">News</Link>
                    <Link href="" className="font-semibold font-barlow text-[#394653]">Research</Link>
                    <Link href="" className="font-semibold font-barlow text-[#394653]">Webinars</Link>
                    <Link href="" className="font-semibold font-barlow text-[#394653]">BlinkX Speaks</Link>
                    <Link href="" className="font-semibold font-barlow text-[#394653]">Knowledge centre</Link>
                    <Link href="" className="font-semibold font-barlow text-[#394653]">About us</Link>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
