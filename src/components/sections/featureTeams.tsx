import Image from 'next/image';
import teamMapImage from "../../../public/team-map.png";
import { AppWindow, Box, CloudFog } from 'lucide-react';

export default function FeatureTeams() {
  return (
    <section className="bg-dark py-28">
      <div className="container flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg space-y-8">
              <h2 className="text-3xl font-semibold text-background sm:text-5xl">
                Scale effortlessly across teams and locations.
              </h2>
              <h3 className="mb-10 max-w-xl text-xl text-background/80 md:mb-13">
                Designed for multi-tenant or multi-location SOC teams, Triad Secure adapts to diverse
                tools and ensures consistent performance, no matter the scale.
              </h3>
              <div className="mt-12 flex flex-col gap-8 text-base leading-7">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-background">
                    <AppWindow aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info" />
                    One window view
                  </dt>{' '}
                  <dd className="inline">View all your SOC tools in one place.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-background">
                    <CloudFog aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info" />
                    Standardized data
                  </dt>{' '}
                  <dd className="inline">Standardize all data into one system.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-background">
                    <Box aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info" />
                    Reduced training
                  </dt>{' '}
                  <dd className="inline">Reduce training time on a centralized platform.</dd>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={teamMapImage} alt="Teams map" className="w-full max-w-3xl rounded-2xl shadow-xl ring-1 ring-white/10 p-4" />
          </div>
        </div>
      </div>
    </section>
  )
}