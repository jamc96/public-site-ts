import type { AboutBlock as AboutBlockProps } from '@/payload-types';
import React from 'react';
import { Media } from '@/components/Media';

export const AboutBlock: React.FC<Partial<AboutBlockProps> & { className?: string }> = ({
    title,
    subtitle,
    logo,
    backgroundImage,
    mainImage,
    content,
    className,
}) => {
    return (
        <section id="about" className={`relative overflow-hidden bg-surface-1 ${className || ''}`}>
            {backgroundImage && (
                <Media
                    resource={backgroundImage}
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-25"
                />
            )}
            <div className="relative z-10 container py-28 flex flex-col gap-16">
                <div className="items-start gap-8 bg-dark/70 px-6 py-6 md:py-16 lg:flex lg:px-32 rounded-2xl">
                    {logo && (
                        <Media
                            resource={logo}
                            className="mb-8 lg:mt-3 lg:mb-0"
                        />
                    )}
                    <div className="max-w-3xl">
                        <h2 className="mb-6 text-3xl font-semibold text-light md:mb-9 md:text-5xl">
                            {title}
                        </h2>
                        <h3 className="max-w-2xl text-xl text-info md:text-xl">
                            {subtitle}
                        </h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
                    <div className="flex items-center justify-center">
                        {mainImage && (
                            <Media
                                resource={mainImage}
                                className="w-full h-auto object-cover shadow-xl ring-1 ring-white/10"
                            />
                        )}
                    </div>
                    <div className="bg-light p-14 prose">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 