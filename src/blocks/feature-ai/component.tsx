import type { FeatureAIBlock as FeatureAIBlockProps } from '@/payload-types';
import React from 'react';
import { Media } from '@/components/Media';

export const FeatureAIBlock: React.FC<Partial<FeatureAIBlockProps> & { className?: string }> = ({
  title,
  subtitle,
  description,
  features,
  image,
  className,
}) => {
  return (
    <section className={`bg-base-ui-2 ${className || ''}`}>
      <div className="container py-28">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-8">
          <div className="flex-1">
            <p className="text-base font-semibold text-info">{title}</p>
            <h2 className="my-4 text-3xl font-semibold text-background sm:text-5xl">
              {subtitle}
            </h2>
            <div className="flex max-w-lg flex-col gap-6 text-light">
              <p className="font-semibold">{description}</p>
              {features?.map((feature, index: number) => (
                <div key={index}>
                  <p>
                    <span className="font-semibold">{feature.title}</span> {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {image && (
              <Media
                resource={image}
                className="w-full max-w-md"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 