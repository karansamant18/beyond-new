import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchInput from './SearchBox';


interface Props {
    openNav: () => void;
}

function Navbar({ openNav }: Props) {
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };


    return (
        <nav className="w-full fixed top-0 h-16 bg-gray-200 p-6">
            <div className="container mx-auto flex justify-between items-center h-full">

                <div onClick={openNav} className="lg:hidden">
                    <Image src="/Menu_Icon.svg" alt="Menu" width={20} height={20} className="cursor-pointer" />
                </div>


                <div className="flex items-center">
                    <div>
                        <Link href="/">
                            <Image src="/Logo.svg" alt="Logo" width={106} height={39} />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-8 pl-8 font-barlow font-semibold text-sm text-[#415260] leading-[21px]">
                        <Link href="">Explore</Link>
                        <Link href="">News</Link>
                        <Link href="">Research</Link>
                        <Link href="">Webinars</Link>
                        <Link href="">BlinkX Speaks</Link>
                        <Link href="">Knowledge centre</Link>
                        <Link href="">About us</Link>
                    </div>
                </div>



                <div className="flex items-center space-x-4">
                    <div className="flex items-center xl:hidden">
                        {!searchVisible && (
                            <Image src="/Search_Icon.svg" alt="Search" width={20} height={20} onClick={toggleSearch} className="cursor-pointer" />
                        )}
                        {searchVisible && <SearchInput />}
                    </div>
                    <div className="hidden xl:flex items-center">
                        <SearchInput />
                        <div>
                            <Image src="/User_Icon.svg" alt="User" width={26} height={26} className="cursor-pointer ml-6" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
