import type { FeatureTeamsBlock as FeatureTeamsBlockProps } from '@/payload-types';
import React from 'react';
import { AppWindow, Box, CloudFog } from 'lucide-react';
import { Media } from '@/components/Media';

export const FeatureTeamsBlock: React.FC<Partial<FeatureTeamsBlockProps> & { className?: string }> = ({
  title,
  subtitle,
  description,
  features,
  image,
  className,
}) => {
  return (
    <section className={`bg-dark py-28 ${className || ''}`}>
      <div className="container flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg space-y-8">
              <h2 className="text-3xl font-semibold text-background sm:text-5xl">
                {title}
              </h2>
              <h3 className="mb-10 max-w-xl text-xl text-background/80 md:mb-13">
                {subtitle}
              </h3>
              <p className="text-base leading-7 text-background/80">
                {description}
              </p>
              <div className="mt-12 flex flex-col gap-8 text-base leading-7">
                {features?.map((feature, index: number) => (
                  <div className="relative pl-9" key={index}>
                    <dt className="inline font-semibold text-background">
                      {feature.icon === 'appWindow' && <AppWindow aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info" />}
                      {feature.icon === 'cloudFog' && <CloudFog aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info" />}
                      {feature.icon === 'box' && <Box aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info" />}
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
                className="w-full max-w-3xl rounded-2xl shadow-xl ring-1 ring-white/10 p-4"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 