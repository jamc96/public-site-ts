import Image from 'next/image';
import socToolImage from '../../../public/soc-tools.png';
import socToolMobileImage from '../../../public/soc-tools-mobile.png';
import { AppWindow, Box, CloudFog } from 'lucide-react';

export default function Feature() {
  return (
    <section id="features" className="overflow-hidden py-28 container flex flex-col gap-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="lg:max-w-lg">
            <p className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-xl">
              All your SOC tool data,
            </p>
            <span className='text-3xl lg:text-6xl font-semibold'>one window.</span>
            <p className="mt-6 text-lg leading-7 text-foreground/80">
              Triad Secure connects to every tool in your SOC stack, normalizing alert data into a
              single pane of glass. No more switching between platforms—get a complete, real-time
              overview in one place.
            </p>
            <dl className="mt-10 space-y-8 text-base leading-7 text-foreground/80">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-foreground">
                  <AppWindow aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-primary" />
                  One window view
                </dt>{' '}
                <dd className="inline">View all your SOC tools in one place.</dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-foreground">
                  <CloudFog aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-primary" />
                  Standardized data
                </dt>{' '}
                <dd className="inline">Standardize all data into one system.</dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-foreground">
                  <Box aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-primary" />
                  Reduced training
                </dt>{' '}
                <dd className="inline">Reduce training time on a centralized platform.</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={socToolImage}
            alt="SOC stack tools"
            className="w-full max-w-3xl rounded-2xl shadow-xl ring-1 ring-white/10 hidden sm:block"
          />
          <Image
            src={socToolMobileImage}
            alt="SOC stack tools"
            className="w-full max-w-md rounded-2xl shadow-xl ring-1 ring-white/10 sm:hidden"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
        <div className="lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold text-primary">Scale Easily</h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Faster response,<br /> lower costs,<br /> stronger security.
            </p>
            <p className="mt-6 text-lg leading-7 text-foreground/80">
              Empower teams to manage multiple clients, medium or large operations seamlessly with
              centralized control and multi-tenancy.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="border-l pl-6">
            <div className="mb-4 flex items-end gap-6">
              <span className="text-7xl font-bold text-primary sm:text-8xl">50%</span>
              <span className="text-2xl leading-8 font-bold text-primary uppercase sm:mb-2.5">Save<br />Time</span>
            </div>
            <p className="text-lg text-foreground/80">
              Cuts ticket handling time by 50% with unified search and intelligent automation.
            </p>
          </div>

          <div className="border-l pl-6">
            <div className="mb-4 flex items-end gap-6">
              <span className="text-7xl font-bold text-primary sm:text-8xl">60K</span>
              <span className="text-2xl leading-8 font-bold text-primary uppercase sm:mb-2.5">Save<br />Money</span>
            </div>
            <p className="text-lg text-foreground/80">
              Reduces operational costs by 40% or $60,000 per year per analyst with tool consolidation
              and automated workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}