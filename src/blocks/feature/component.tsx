import type { FeatureBlock as FeatureBlockProps } from '@/payload-types';
import React from 'react';
import { AppWindow, Box, CloudFog } from 'lucide-react';
import { Media } from '@/components/Media';

export const FeatureBlock: React.FC<Partial<FeatureBlockProps> & { className?: string }> = ({
  title,
  subtitle,
  description,
  features,
  image,
  scaleTitle,
  scaleSubtitle,
  scaleDescription,
  statistics,
  className,
}) => {
  return (
    <section id="features" className={`overflow-hidden py-28 container flex flex-col gap-20 ${className || ''}`}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="lg:max-w-lg">
            <p className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-xl">
              {title}
            </p>
            <span className="text-3xl lg:text-6xl font-semibold">{subtitle}</span>
            <p className="mt-6 text-lg leading-7 text-foreground/80">{description}</p>
            <dl className="mt-10 space-y-8 text-base leading-7 text-foreground/80">
              {features?.map((feature: any, index: number) => (
                <div className="relative pl-9" key={index}>
                  <dt className="inline font-semibold text-foreground">
                    {feature.icon === 'appWindow' && <AppWindow aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-primary" />}
                    {feature.icon === 'cloudFog' && <CloudFog aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-primary" />}
                    {feature.icon === 'box' && <Box aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-primary" />}
                    {feature.title}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {image && (
            <Media
              resource={image}
              className="w-full max-w-3xl rounded-2xl shadow-xl ring-1 ring-white/10 hidden sm:block"
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
        <div className="lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold text-primary">{scaleTitle}</h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {scaleSubtitle}
            </p>
            <p className="mt-6 text-lg leading-7 text-foreground/80">{scaleDescription}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          {statistics?.map((stat: any, index: number) => (
            <div className="border-l pl-6" key={index}>
              <div className="mb-4 flex items-end gap-6">
                <span className="text-7xl font-bold text-primary sm:text-8xl">{stat.value}</span>
                <span className="text-2xl leading-8 font-bold text-primary uppercase sm:mb-2.5">
                  {stat.label?.split(' ').map((word: string, wordIndex: number) => (
                    <React.Fragment key={wordIndex}>
                      {word}
                      {wordIndex < stat.label.split(' ').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
              <p className="text-lg text-foreground/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 