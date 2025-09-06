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

            {/* Prominent Header */}
            <header
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                    color: '#ffffff',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    letterSpacing: '2px',
                    fontFamily: 'Arial, sans-serif',
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            >
                Balya Bhavan 75th
            </header>

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
