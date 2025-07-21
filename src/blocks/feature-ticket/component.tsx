import type { FeatureTicketBlock as FeatureTicketBlockProps } from '@/payload-types';
import React from 'react';
import { AppWindow, Box, CloudFog } from 'lucide-react';
import { Media } from '@/components/Media';
import { Button } from '@/components/ui/button';

export const FeatureTicketBlock: React.FC<Partial<FeatureTicketBlockProps> & { className?: string }> = ({
    title,
    subtitle,
    description,
    features,
    image,
    buttonText,
    buttonUrl,
    className,
}) => {
    return (
        <section className={`bg-base-ui-1 py-28 ${className || ''}`}>
            <div className="container flex flex-col gap-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-info-2">{title}</h2>
                            <p className="mt-2 text-3xl font-semibold tracking-tight text-background sm:text-5xl">
                                {subtitle}
                            </p>
                            <p className="mt-6 text-lg leading-7 text-background/80">
                                {description}
                            </p>
                            <div className="mt-10 flex flex-col gap-8 text-base leading-7 text-background/80">
                                {features?.map((feature, index: number) => (
                                    <div className="relative pl-9" key={index}>
                                        <dt className="inline font-semibold text-background">
                                            {feature.icon === 'appWindow' && <AppWindow aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info-2" />}
                                            {feature.icon === 'cloudFog' && <CloudFog aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info-2" />}
                                            {feature.icon === 'box' && <Box aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info-2" />}
                                            {feature.title}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        {image && (
                            <Media
                                resource={image}
                                className="w-full max-w-3xl rounded-2xl shadow-xl ring-1 ring-white/10"
                            />
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button size="lg" asChild>
                        <a href={buttonUrl}>{buttonText}</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}; 