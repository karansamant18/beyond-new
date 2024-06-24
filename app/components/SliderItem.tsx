import React from 'react';
import ImageCard from './ImageCard';

interface SliderItemProps {
    src: string;
    alt: string;
    category: string;
    title: string;
    description: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ src, alt, category, title, description }) => (
    <div className="mb-6 xs:mb-0">
        <div className="grid grid-cols-3 gap-4 items-start">
            <ImageCard src={src} alt={alt} category={category} />
            <div className="col-span-2">
                <div className="flex items-start">
                    <h2 className="relative text-left text-xs lg:text-sm font-semibold text-black">
                        {title}
                    </h2>
                    <div className="bg-gray-800 text-white text-xs font-semibold py-1 px-3 rounded-full hidden md:block lg:block xl:block">
                        {category}
                    </div>
                </div>
                <p className="text-left text-xs text-black mt-2">{description}</p>
            </div>
        </div>
    </div>
);

export default SliderItem;
