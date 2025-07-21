import type { ComparationBlock as ComparationBlockProps } from '@/payload-types';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2 } from 'lucide-react';
import tsLogoSideStack from "../../../public/ts-logo-sidestack.svg";
import topoGraphicImage from "../../../public/topographic-background.svg";
import { Media } from '@/components/Media';

export const ComparationBlock: React.FC<Partial<ComparationBlockProps> & { className?: string }> = ({
  title,
  comparisonData,
  className,
}) => {
  return (
    <section id="comparison" className={`relative bg-light ${className || ''}`}>
      {topoGraphicImage && (
        <Media
          src={topoGraphicImage}
          alt="Topographic background"
          className="absolute inset-0 z-0 h-full object-cover opacity-35"
          fill
        />
      )}
      <div className="absolute inset-0 z-10 h-full bg-light/60" />
      <div className="relative z-20 container py-28 space-y-8">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold sm:text-5xl">
          {title}
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-48 pl-4 text-left sm:pl-8">Feature Category</TableHead>
              <TableHead className="min-w-32">
                {tsLogoSideStack && (
                  <Media
                    src={tsLogoSideStack}
                    alt="Triad Secure Logo"
                    className="m-auto h-11 w-auto"
                  />
                )}
              </TableHead>
              <TableHead className="min-w-32">XDRs</TableHead>
              <TableHead className="min-w-32">SOARs</TableHead>
              <TableHead className="min-w-32">SIEMs</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData?.map((item, index: number) => (
              <TableRow key={index} className="odd:bg-white">
                <TableCell className="text-lg pl-4 sm:pl-8">{item.feature}</TableCell>
                <TableCell>
                  {item.triadsecure && <CheckCircle2 size={24} className="m-auto text-white bg-primary rounded-full" />}
                </TableCell>
                <TableCell>
                  {item.xdr && <CheckCircle2 size={24} className="m-auto text-white bg-foreground/40 rounded-full" />}
                </TableCell>
                <TableCell>
                  {item.soar && <CheckCircle2 size={24} className="m-auto text-white bg-foreground/40 rounded-full" />}
                </TableCell>
                <TableCell>
                  {item.siem && <CheckCircle2 size={24} className="m-auto text-white bg-foreground/40 rounded-full" />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}; 