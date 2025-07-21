import Image from 'next/image';
import securityTableImage from "../../../public/security-alert-table.png";
import { AppWindow, Box, CloudFog } from 'lucide-react';
import { Button } from '../ui/button';

export default function FeatureTicket() {
  return (
    <section className="bg-base-ui-1 py-28">
      <div className="container flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-info-2">Streamline operations</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-background sm:text-5xl">
                Built-in ticketing.
              </p>
              <p className="mt-6 text-lg leading-7 text-background/80">
                Triad Secure creates a seamless workflow with an intuitive, built-in ticket-management
                solution, keeping your team organized and focused on what matters.
              </p>
              <div className="mt-10 flex flex-col gap-8 text-base leading-7 text-background/80">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-background">
                    <AppWindow aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info-2" />
                    One window view
                  </dt>{' '}
                  <dd className="inline">View all your SOC tools in one place.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-background">
                    <CloudFog aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info-2" />
                    Standardized data
                  </dt>{' '}
                  <dd className="inline">Standardize all data into one system.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-background">
                    <Box aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-info-2" />
                    Reduced training
                  </dt>{' '}
                  <dd className="inline">Reduce training time on a centralized platform.</dd>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={securityTableImage} alt="ticket-management table" className="w-full max-w-3xl rounded-2xl shadow-xl ring-1 ring-white/10" />
          </div>
        </div>
        <div className="flex justify-center">
          <Button size="lg">
            Get a demo
            {/* <UnderscoreIcon className="animate-pulse" width={32} height={32} /> */}
          </Button>
        </div>
      </div>

    </section>
  )
}