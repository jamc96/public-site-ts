import { FileDown } from 'lucide-react';

export default function Results() {
  return (
    <section>
      <div id="roi" className="container py-28">
        <div className="grid grid-cols-1 gap-14 md:gap-8  md:pt-16 border-warm-surface-4 lg:grid-cols-2 border p-4">

          <div className="max-w-xl flex flex-col items-start justify-center gap-8">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Real results.<br />Real impact.
            </h2>
            <h3 className="text-xl text-foreground/80">
              SOC teams using Triad Secure see a 50% reduction in triage time, 90% less training
              overhead, and zero disruption to their existing workflows.
            </h3>
            <a
              className="inline-flex cursor-pointer items-center gap-2 py-3 text-lg font-semibold text-primary underline-offset-4 hover:underline"
            >
              <FileDown name="pdf" size={24} />Download the whitepaper
            </a>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col sm:flex-1">
              <div className="flex flex-col gap-5 px-6 pt-6 pb-14 md:p-6">
                <span className="text-xl font-bold text-warning uppercase">Before</span>
                <div className="h-2 w-12 bg-warning"></div>
              </div>
              <div className="h-full bg-light px-6 pt-8 pb-14 md:px-8 md:py-8 xl:min-h-[32rem]">
                <div>
                  <div className="mb-3">
                    <span className="block text-lg font-semibold">Triage Time</span>
                    <span className="block text-xs">(Average Time to Triage an Alert)</span>
                  </div>
                  <span className="text-xl font-bold uppercase">30 minutes per alert</span>
                </div>
                <div className="mt-9 mb-6 h-2 w-12 bg-warning"></div>
                <div>
                  <div className="mb-3">
                    <span className="block text-lg font-semibold">Costs</span>
                    <span className="block text-xs">(Annual SOC Operational Cost per Analyst)</span>
                  </div>
                  <span className="text-xl font-bold uppercase">$50 per alert</span>
                </div>
                <div className="mt-9 mb-6 h-2 w-12 bg-warning"></div>
                <div>
                  <div className="mb-3">
                    <span className="block text-lg font-semibold">Missed Threats</span>
                    <span className="block text-xs">(Percentage of Threats Undetected)</span>
                  </div>
                  <span className="text-xl font-bold uppercase">20%</span>
                </div>
              </div>
            </div>
            <div className="sm:flex-1 text-background">
              <div className="flex flex-col gap-5 px-6 pt-6 pb-14 md:p-6">
                <span className="text-xl font-bold text-primary uppercase">After</span>
                <div className="h-2 w-12 bg-primary"></div>
              </div>
              <div className="flex flex-col md:min-h-[32rem]">
                <div className="flex grow flex-col justify-end px-6 pt-0 pb-6 md:p-6">
                  <span className="text-8xl font-extrabold text-primary md:text-7xl xl:text-8xl">40%</span>
                  <span className="block text-xl font-bold text-primary uppercase">LOWER OVERALL</span>
                </div>
                <div className="bg-primary px-6 pt-8 pb-14 md:px-8 md:pb-16">
                  <div>
                    <div className="mb-3">
                      <span className="block text-lg font-semibold text-dark-foreground">Triage Time</span>
                      <span className="block text-xs text-dark-foreground">(Average Time to Triage an Alert)</span>
                    </div>
                    <span className="text-xl font-bold text-dark-foreground uppercase">15 minutes per alert</span>
                  </div>
                  <div className="mt-9 mb-6 h-2 w-12 bg-info"></div>
                  <div>
                    <div className="mb-3">
                      <span className="block text-lg font-semibold text-dark-foreground">Costs Savings</span>
                      <span className="block text-xs text-dark-foreground">(Annual SOC Operational Cost per Analyst)</span>
                    </div>
                    <span className="text-xl font-bold text-dark-foreground uppercase">$60,000 per year per analyst</span>
                  </div>
                  <div className="mt-9 mb-6 h-2 w-12 bg-info"></div>
                  <div>
                    <div className="mb-3">
                      <span className="block text-lg font-semibold text-dark-foreground">Missed Threats</span>
                      <span className="block text-xs text-dark-foreground">(Percentage of Threats Undetected)</span>
                    </div>
                    <span className="text-xl font-bold text-dark-foreground uppercase">7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}