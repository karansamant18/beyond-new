import React from 'react';
import Image from 'next/image';


class SearchInput extends React.Component {
    render() {
        return (
            <div className="relative flex items-center font-barlow">
                <input
                    type="text"
                    placeholder="Search"
                    className="rounded-full border border-gray-300 w-50 h-10 text-base pl-6"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                    <Image src="/Search_Icon.svg" alt="Search" width={20} height={20} className="cursor-pointer" />
                </div>
            </div>
        );
    }
}

export default SearchInput;
