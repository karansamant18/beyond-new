import { blinkxBlack } from '@/lib/fonts';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './SliderItem';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };

    const slides = [
        {
            src: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "user",
            category: "Category",
            title: "Infosys completes acquisition of semiconductor design services provider 'InSemi'",
            description: "Infosys has announced that it has completed the acquisition of InSemi, a leading semiconductor design and embedded services provider."
        },
        {
            src: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "user",
            category: "Category",
            title: "Infosys completes acquisition of semiconductor design services provider 'InSemi'",
            description: "Infosys has announced that it has completed the acquisition of InSemi, a leading semiconductor design and embedded services provider."
        },
        {
            src: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "user",
            category: "Category",
            title: "Infosys completes acquisition of semiconductor design services provider 'InSemi'",
            description: "Infosys has announced that it has completed the acquisition of InSemi, a leading semiconductor design and embedded services provider."
        },
    ];

    return (
        <div className="hero-section bg-white text-center mt-10">
            <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black ${blinkxBlack.className} pt-20`}>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F26F21] to-[#EC0C6E]">
                    Beyond
                </span> with JM
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 text-black mx-10 md:mx-16 lg:mx-40 xl:mx-48">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 my-10 mx-6 gap-12">
                {/* Section 1 */}
                <div className="relative">
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Network"
                            layout="responsive"
                            objectFit="cover"
                            width={100}
                            height={100}
                            className="w-full h-full"
                        />
                        <div className="absolute top-2 right-2 bg-blue-400 text-white text-xs font-semibold py-1 px-3 rounded-full">
                            Category
                        </div>
                    </div>
                    <h2 className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-6 text-black">Embrace Your Unique Fashion Statement</h2>
                    <p className="text-left text-xs sm:text-sm md:text-base lg:text-lg mt-2 text-[#222]">
                        Welcome to the world where fashion isn't just about clothes—it's about confidence, self-expression
                    </p>
                </div>

                {/* Grey Line */}
                <div className="sm:hidden w-full h-[1px] bg-gray-300"></div>

                {/* Section 2 */}
                <div className="w-full">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {slides.map((slide, index) => (
                                <SliderItem
                                    key={index}
                                    src={slide.src}
                                    alt={slide.alt}
                                    category={slide.category}
                                    title={slide.title}
                                    description={slide.description}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
