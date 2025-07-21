import { cn } from '@/utilities/ui';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Media } from '@/components/Media';
import topoBackground from '../../../public/topographic-background.svg';
import camoBackground from '../../../public/camo-background.svg';

export const PRICING_DATA: Pricing[] = [{
  title: "Starter",
  subtitle: "",
  frequency: 'monthly',
  type: 'starter',
  price: {
    currency: "$",
    amount: 499,
  },
  items: [
    {
      label: "2x Connectors, 5 Analyst Seats",
      iconColor: "text-surface-1",
    },
    {
      label: "Ticketing System & Automation",
      iconColor: "text-surface-1",
    },
    {
      label: "Alert Triage Platform",
      iconColor: "text-surface-1",
    },
  ]
}, {
  title: "Pro",
  subtitle: "",
  frequency: 'monthly',
  type: 'pro',
  price: {
    currency: "$",
    amount: 999,
  },
  items: [
    {
      label: "10x Connectors, 15 Analyst Seats",
      iconColor: "text-light",
    },
    {
      label: "Ticketing System & Automation",
      iconColor: "text-light",
    },
    {
      label: "Alert Triage Platform",
      iconColor: "text-light",
    },
    {
      label: "Threat Intelligence & Hunting",
      iconColor: "text-info",
    },
    {
      label: "Device and Asset Management",
      iconColor: "text-info",
    },
  ],
}, {
  title: "Enterprise",
  subtitle: "Contact us for your custom solution",
  frequency: 'monthly',
  type: 'enterprise',
  price: {
    currency: "",
    amount: 0,
  },
  items: [
    {
      label: "30x Connectors, 50 Analyst Seats",
      iconColor: "text-light",
    },
    {
      label: "Ticketing System & Automation",
      iconColor: "text-light",
    },
    {
      label: "Alert Triage Platform",
      iconColor: "text-light",
    },
    {
      label: "Threat Intelligence & Hunting",
      iconColor: "text-light",
    },
    {
      label: "Device and Asset Management",
      iconColor: "text-light",
    },
    {
      label: "Enterprise Ops Integrations",
      iconColor: "text-info",
    },
    {
      label: "Advanced AI Workflows ",
      iconColor: "text-info",
    },
  ]
},
{
  title: "Starter",
  subtitle: "",
  frequency: 'yearly',
  type: 'starter',
  price: {
    currency: "$",
    amount: 4999,
  },
  items: [
    {
      label: "2x Connectors, 5 Analyst Seats",
      iconColor: "text-surface-1",
    },
    {
      label: "Ticketing System & Automation",
      iconColor: "text-surface-1",
    },
    {
      label: "Alert Triage Platform",
      iconColor: "text-surface-1",
    },
  ]
}, {
  title: "Pro",
  subtitle: "",
  frequency: 'yearly',
  type: 'pro',
  price: {
    currency: "$",
    amount: 9999,
  },
  items: [
    {
      label: "10x Connectors, 15 Analyst Seats",
      iconColor: "text-light",
    },
    {
      label: "Ticketing System & Automation",
      iconColor: "text-light",
    },
    {
      label: "Alert Triage Platform",
      iconColor: "text-light",
    },
    {
      label: "Threat Intelligence & Hunting",
      iconColor: "text-info",
    },
    {
      label: "Device and Asset Management",
      iconColor: "text-info",
    },
  ],
}, {
  title: "Enterprise",
  subtitle: "Contact us for your custom solution",
  frequency: 'yearly',
  type: 'enterprise',
  price: {
    currency: "",
    amount: 0,
  },
  items: [
    {
      label: "30x Connectors, 50 Analyst Seats",
      iconColor: "text-light",
    },
    {
      label: "Ticketing System & Automation",
      iconColor: "text-light",
    },
    {
      label: "Alert Triage Platform",
      iconColor: "text-light",
    },
    {
      label: "Threat Intelligence & Hunting",
      iconColor: "text-light",
    },
    {
      label: "Device and Asset Management",
      iconColor: "text-light",
    },
    {
      label: "Enterprise Ops Integrations",
      iconColor: "text-info",
    },
    {
      label: "Advanced AI Workflows ",
      iconColor: "text-info",
    },
  ]
}];

type PricingFrequency = "monthly" | "yearly";

type PricingItem = {
  label: string;
  iconColor: string;
};
type Pricing = {
  title: string;
  subtitle: string;
  type: 'starter' | 'pro' | 'enterprise';
  frequency: PricingFrequency;
  price: {
    currency: string;
    amount: number;
  };
  items: PricingItem[];
};

function PricingCard({ type, title, subtitle, price, items, frequency }: Pricing) {
  const isStarter = type === "starter";
  const isPro = type === "pro";
  const isEnterprise = type === "enterprise";

  return (
    <div
      className={cn("relative rounded-4xl", {
        "bg-light": isStarter,
        "bg-base-ui-2": isPro,
        "bg-dark overflow-hidden": isEnterprise,
      })}
    >
      {isStarter && (
        <Media
          src={topoBackground}
          alt="Topographic background"
          className="absolute inset-0 z-0 h-full object-cover opacity-30"
          fill
        />
      )}
      {isEnterprise && (
        <Media
          src={camoBackground}
          alt="Topographic background"
          className="absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10"
          fill
        />
      )}
      <div className="relative z-10">
        <div
          className={cn("p-6 md:p-8", {
            "flex flex-col gap-5 md:gap-9": isEnterprise,
          })}
        >
          <span
            className={cn("text-lg font-bold uppercase md:text-xl", {
              "text-surface-1": isStarter,
              "text-light": isPro || isEnterprise,
            })}
          >
            {title}
          </span>
          {isEnterprise && subtitle && (
            <span className="text-lg text-light md:text-xl">{subtitle}</span>
          )}
          {(isStarter || isPro) && (
            <div className="flex items-center gap-2">
              <span
                className={cn("text-2xl font-bold md:text-[40px]", {
                  "text-surface-1": isStarter,
                  "text-light": isPro,
                })}
              >
                {price.currency}
              </span>
              <span
                className={cn("text-3xl font-bold md:text-4xl", {
                  "text-surface-1": isStarter,
                  "text-light": isPro,
                })}
              >
                {price.amount.toLocaleString()}
              </span>
              <span
                className={cn("text-2xl font-bold md:text-[40px]", {
                  "text-surface-1": isStarter,
                  "text-light": isPro,
                })}
              >
                {frequency === 'yearly' ? '/yr' : '/mo'}
              </span>
            </div>
          )}
        </div>
        <div className="border border-surface-3"></div>
        <div className="flex flex-col gap-14 p-6 md:p-8">
          <ul className="flex flex-col gap-6">
            {items.map(({ iconColor, label }, index) => (
              <li
                key={index}
                className={cn("flex items-center gap-2.5 text-lg md:text-xl", {
                  "text-surface-1": isStarter,
                  "text-light": isPro || isEnterprise,
                })}
              >
                <CheckCircle2 className={iconColor} />
                {label}
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="w-full"
          >
            Get started
            {/* <UnderscoreIcon
                            className={cn("animate-pulse", {
                                "text-dark-foreground": isStarter || isPro,
                                "text-state-blue": isEnterprise,
                            })}
                            width={32}
                            height={32}
                        /> */}
          </Button>
        </div>
      </div>
    </div>
  );
}
function PricingTabs() {
  const monthly = PRICING_DATA.filter(({ frequency }) => frequency === 'monthly')
  const yearly = PRICING_DATA.filter(({ frequency }) => frequency === 'yearly')
  return (
    <Tabs defaultValue="monthly" className="flex flex-col gap-8 items-center">
      <TabsList>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">Yearly</TabsTrigger>
      </TabsList>
      <TabsContent value="monthly" className="w-full">
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-3">
          {monthly.map((pricing, index) => (<PricingCard key={`pricing-card-monthly-${index}`} {...pricing} />))}
        </div>
      </TabsContent>
      <TabsContent value="yearly" className="w-full">
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-3">
          {yearly.map((pricing, index) => (<PricingCard key={`pricing-card-yearly-${index}`} {...pricing} />))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container py-28 flex flex-col gap-20">
        <h2 className="mx-auto mb-0 max-w-3xl text-center text-3xl font-semibold sm:text-5xl">
          Flexible models for MSSPs, medium and large SOCs.
        </h2>
        <PricingTabs />
      </div>
    </section>
  )
}