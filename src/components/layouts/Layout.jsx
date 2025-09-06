'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
// import { usePathname } from 'next/navigation';
// import { Header, Footer } from '@/components/ui/modules';
// import Link from 'next/link';

const Scene = dynamic(() => import('@/webgl/Scene'), { ssr: false });

export function Layout({ children }) {
    const ref = useRef(null);
    // const pathname = usePathname();

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'auto',
                touchAction: 'auto',
            }}
        >

            {children}
            <Scene
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 1,
                }}
                eventSource={ref}
                eventPrefix="client"
            />

        </div>
    );
}
