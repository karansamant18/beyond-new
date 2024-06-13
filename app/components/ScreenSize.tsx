import React, { useState, useEffect } from 'react';

const getScreenSize = (width: number): string => {
    if (width >= 1280) return 'xl';
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    if (width >= 640) return 'sm';
    return 'xs';
};

const ScreenSizeDisplay: React.FC = () => {
    const [screenSize, setScreenSize] = useState<string>('');

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize(window.innerWidth));
        };

        if (typeof window !== 'undefined') {
            setScreenSize(getScreenSize(window.innerWidth));
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="fixed bottom-0 left-0 p-4 bg-gray-800 text-white">
            Screen size: {screenSize}
        </div>
    );
};

export default ScreenSizeDisplay;
