import Image from 'next/image';
import tsPyramidImage from "../../../public/ts-pyramid.svg";

export default function FeatureAI() {
  return (
    <section className="bg-base-ui-2">
      <div className="container py-28">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-8">
          <div className="flex-1">
            <p className="text-base font-semibold text-info">Revolutionizing SOC operations</p>
            <h2 className="my-4 text-3xl font-semibold text-background sm:text-5xl">
              AI-Powered Threat Hunting and AI-NLP Search
            </h2>
            <div className="flex max-w-lg flex-col gap-6 text-light">
              <p className="font-semibold">
                Proactively detect threats and query data effortlessly with AI-driven tools.
              </p>
              <p>
                <span className="font-semibold">AI-Powered Threat Hunting:</span> Our advanced machine learning
                algorithms continuously analyze data from all connected tools to proactively identify and
                mitigate threats. By normalizing and contextualizing data across your SOC stack, this feature
                detects subtle anomalies and patterns that traditional methods might miss, reducing the risk
                of breaches.
              </p>
              <p>
                <span className="font-semibold">AI-NLP Search:</span> Query logs, alerts, and threat data in
                plain English, no matter the tool. Our AI normalizes disparate data sources and provides
                context, delivering instant, actionable results without complex queries or manual correlation—empowering
                analysts to act faster.
              </p>
              <p>
                <span className="font-semibold">Seamless Integration:</span> These AI tools enhance your existing
                SOC environment by unifying data across platforms, boosting efficiency without requiring
                replacements or extensive retraining.
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src={tsPyramidImage} alt="AI-driven tools" />
          </div>
        </div>
      </div>
    </section>
  )
}