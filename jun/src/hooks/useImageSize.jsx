import { useEffect, useState } from "react";

export default function useImageSize() {
    const [isMobile, SetIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => SetIsMobile(window.innerWidth < 640);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile };
}