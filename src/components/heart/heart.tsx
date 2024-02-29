import Image, { ImageProps } from "next/image";
import { forwardRef, useMemo } from "react";

interface HeartProps extends Omit<ImageProps, 'src' | 'alt'> {
    status?: 'empty' | 'full'
    alt?: string;
}

const Heart = forwardRef<HTMLImageElement, HeartProps>(({ status = 'empty', alt, ...props }, ref) => {
    const data = useMemo(() => {
        switch (status) {
            case 'empty':
                return {
                    src: '/icons/heart-empty.svg',
                    alt: 'Empty heart'
                }
            case 'full':
                return {
                    src: '/icons/heart-full.svg',
                    alt: 'Full heart'
                }
        }
    }, [status]);

    return <Image width={24} height={22} src={data.src} alt={alt || data.alt} ref={ref} {...props} />
});

Heart.displayName = 'Heart';

export default Heart;