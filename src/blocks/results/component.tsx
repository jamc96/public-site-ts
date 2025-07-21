import type { ResultsBlock as ResultsBlockProps } from '@/payload-types';
import React from 'react';
import { FileDown } from 'lucide-react';

export const ResultsBlock: React.FC<Partial<ResultsBlockProps> & { className?: string }> = ({
  title,
  subtitle,
  downloadText,
  downloadUrl,
  beforeMetrics,
  afterMetrics,
  overallImprovement,
  className,
}) => {
  return (
    <section className={className || ''}>
      <div id="roi" className="container py-28">
        <div className="grid grid-cols-1 gap-14 md:gap-8 md:pt-16 border-warm-surface-4 lg:grid-cols-2 border p-4">
          <div className="max-w-xl flex flex-col items-start justify-center gap-8">
            <h2 className="text-3xl font-semibold sm:text-5xl max-w-xs">
              {title}
            </h2>
            <h3 className="text-xl text-foreground/80">
              {subtitle}
            </h3>
            <a
              href={downloadUrl}
              className="inline-flex cursor-pointer items-center gap-2 py-3 text-lg font-semibold text-primary underline-offset-4 hover:underline"
            >
              <FileDown size={24} />
              {downloadText}
            </a>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col sm:flex-1">
              <div className="flex flex-col gap-5 px-6 pt-6 pb-14 md:p-6">
                <span className="text-xl font-bold text-warning uppercase">Before</span>
                <div className="h-2 w-12 bg-warning"></div>
              </div>
              <div className="h-full bg-light px-6 pt-8 pb-14 md:px-8 md:py-8 xl:min-h-[32rem]">
                {beforeMetrics?.map((metric, index: number) => (
                  <div key={index}>
                    <div className="mb-3">
                      <span className="block text-lg font-semibold">{metric.label}</span>
                      <span className="block text-xs">{metric.description}</span>
                    </div>
                    <span className="text-xl font-bold uppercase">{metric.value}</span>
                    {index < beforeMetrics.length - 1 && (
                      <div className="mt-9 mb-6 h-2 w-12 bg-warning"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:flex-1 text-background">
              <div className="flex flex-col gap-5 px-6 pt-6 pb-14 md:p-6">
                <span className="text-xl font-bold text-primary uppercase">After</span>
                <div className="h-2 w-12 bg-primary"></div>
              </div>
              <div className="flex flex-col md:min-h-[32rem]">
                <div className="flex grow flex-col justify-end px-6 pt-0 pb-6 md:p-6">
                  <span className="text-8xl font-extrabold text-primary md:text-7xl xl:text-8xl">{overallImprovement}</span>
                  <span className="block text-xl font-bold text-primary uppercase">LOWER OVERALL</span>
                </div>
                <div className="bg-primary px-6 pt-8 pb-14 md:px-8 md:pb-16">
                  {afterMetrics?.map((metric, index: number) => (
                    <div key={index}>
                      <div className="mb-3">
                        <span className="block text-lg font-semibold text-dark-foreground">{metric.label}</span>
                        <span className="block text-xs text-dark-foreground">{metric.description}</span>
                      </div>
                      <span className="text-xl font-bold text-dark-foreground uppercase">{metric.value}</span>
                      {index < afterMetrics.length - 1 && (
                        <div className="mt-9 mb-6 h-2 w-12 bg-info"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 