import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
    src: string;
    alt: string;
    category: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, category }) => (
    <div className="col-span-1 flex justify-center items-center">
        <div className="w-full h-36 lg:h-42 relative">
            <Image
                src={src}
                alt={alt}
                className="object-cover w-full h-full"
                height={300}
                width={300}
            />
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-pink-400 text-white text-[0.6rem] font-semibold py-1 px-2 rounded-full block sm:hidden md:hidden lg:hidden xl:hidden">
                {category}
            </div>
        </div>
    </div>
);

export default ImageCard;
