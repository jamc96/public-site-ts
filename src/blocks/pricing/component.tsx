import type { PricingBlock as PricingBlockProps } from '@/payload-types';
import React from 'react';
import { cn } from '@/utilities/ui';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';
import CustomLink from '@/components/shared/custom-link';
import { Media } from '@/components/Media';
import topoBackground from '../../../public/topographic-background.svg';
import camoBackground from '../../../public/camo-background.svg';

type PricingItem = {
  label: string;
  included: boolean;
};

type Pricing = {
  title: string;
  subtitle: string;
  type: 'starter' | 'pro' | 'enterprise';
  frequency: 'monthly' | 'yearly';
  price: {
    currency: string;
    amount: number;
  };
  items: PricingItem[];
};

// Transform Payload data to local Pricing type
const transformPricingData = (payloadPlans: PricingBlockProps['plans'] | undefined): Pricing[] => {
  if (!payloadPlans) return [];

  return payloadPlans.map(plan => ({
    title: plan.title,
    subtitle: plan.subtitle || '',
    type: plan.type,
    frequency: plan.frequency,
    price: plan.price,
    items: plan.items?.map(item => ({
      label: item.label,
      included: item.included ?? true,
    })) || [],
  }));
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
          alt="Camo background"
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
                  "text-base-ui-2": isStarter,
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
            {items.map((item, index) => (
              <li
                key={index}
                className={cn("flex items-center gap-2.5 text-lg md:text-xl", {
                  "text-base-ui-2": isStarter,
                  "text-light": isPro || isEnterprise,
                })}
              >
                <CheckCircle2
                  size={24}
                  className={cn("rounded-full shrink-0", {
                    "text-white bg-primary": item.included,
                    "text-white bg-foreground/40": !item.included,
                  })}
                />
                {item.label}
              </li>
            ))}
          </ul>
          <CustomLink
            url="/contact"
            size="lg"
            className="w-full"
            appearance="default"
          >
            Get started
          </CustomLink>
        </div>
      </div>
    </div>
  );
}

function PricingTabs({ plans }: { plans: Pricing[] }) {
  const monthlyPlans = plans.filter(plan => plan.frequency === 'monthly');
  const yearlyPlans = plans.filter(plan => plan.frequency === 'yearly');

  return (
    <Tabs defaultValue="monthly" className="flex flex-col gap-8 items-center">
      <TabsList>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">Yearly</TabsTrigger>
      </TabsList>
      <TabsContent value="monthly" className="w-full">
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-3">
          {monthlyPlans.map((plan, index) => (
            <PricingCard key={`pricing-card-monthly-${index}`} {...plan} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="yearly" className="w-full">
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-3">
          {yearlyPlans.map((plan, index) => (
            <PricingCard key={`pricing-card-yearly-${index}`} {...plan} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export const PricingBlock: React.FC<Partial<PricingBlockProps> & { className?: string }> = ({
  title,
  subtitle,
  plans,
  className,
}) => {
  const transformedPlans = transformPricingData(plans);

  return (
    <section className={cn(className, 'py-24')}>
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">{title}</h2>
          <p className="mt-6 text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="mt-16">
          <PricingTabs plans={transformedPlans} />
        </div>
      </div>
    </section>
  );
}; 