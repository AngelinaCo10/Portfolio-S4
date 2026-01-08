'use client';

import { useState } from 'react';

interface ImageModalProps {
    src: string;
    alt: string;
    className?: string;
    isScrollable?: boolean;
}

export default function ImageModal({ src, alt, className, isScrollable = false }: ImageModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={className}
                onClick={() => setIsOpen(true)}
                style={{ cursor: 'pointer' }}
            />
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        overflow: isScrollable ? 'auto' : 'hidden',
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        style={{
                            maxWidth: isScrollable ? '90vw' : '90vw',
                            maxHeight: isScrollable ? '90vh' : '90vh',
                            overflow: isScrollable ? 'auto' : 'visible',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={src}
                            alt={alt}
                            style={{
                                width: isScrollable ? '300%' : '80vw',
                                height: isScrollable ? 'auto' : 'auto',
                                objectFit: 'contain',
                                backgroundColor: 'white',
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}