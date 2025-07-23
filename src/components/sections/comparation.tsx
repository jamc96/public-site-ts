import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import TsLogoSideStack from "../../../public/ts-logo-sidestack.svg";
import TopoGraphicImage from "../../../public/topographic-background.svg";
import { CheckCircle2 } from 'lucide-react';

export default function Comparation() {
  const comparationData = [
    {
      feature: "Threat Detection",
      triadsecure: null,
      xdr: null,
      soar: null,
      siem: null,
    },
    {
      feature: "Incident Response",
      triadsecure: CheckCircle2,
      xdr: CheckCircle2,
      soar: CheckCircle2,
      siem: CheckCircle2,
    },
    {
      feature: "Multi-Tenancy",
      triadsecure: CheckCircle2,
      xdr: CheckCircle2,
      soar: CheckCircle2,
      siem: CheckCircle2,
    },
    {
      feature: "Scalability",
      triadsecure: CheckCircle2,
      xdr: CheckCircle2,
      soar: CheckCircle2,
      siem: null,
    },
    {
      feature: "Unified Search",
      triadsecure: CheckCircle2,
      xdr: null,
      soar: CheckCircle2,
      siem: null,
    },
    {
      feature: "Cost Efficiency",
      triadsecure: CheckCircle2,
      xdr: CheckCircle2,
      soar: CheckCircle2,
      siem: CheckCircle2,
    },
    {
      feature: "Time to Value",
      triadsecure: CheckCircle2,
      xdr: CheckCircle2,
      soar: CheckCircle2,
      siem: CheckCircle2,
    },
  ];

  return (
    <section id="comparison" className="relative bg-light">
      <Image
        src={TopoGraphicImage}
        alt="Topographic background"
        className="absolute inset-0 z-0 h-full object-cover opacity-35"
      />
      <div className="absolute inset-0 z-10 h-full bg-light/60" />
      <div className="relative z-20 container py-28 space-y-8">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold sm:text-5xl">
          Why Triad Secure outperforms XDRs, SOARs, and SIEMs for MSSPs, medium and large SOCs.
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-48 pl-4 text-left sm:pl-8">Feature Category</TableHead>
              <TableHead className="min-w-32 "><Image src={TsLogoSideStack} alt='Triad Secure logo' className="m-auto h-10 bg-pink-400" /></TableHead>
              <TableHead className="min-w-32">XDRs</TableHead>
              <TableHead className="min-w-32">SOARs</TableHead>
              <TableHead className="min-w-32">SIEMs</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              comparationData.map((item) => (
                <TableRow key={item.feature} className="odd:bg-white">
                  <TableCell className="text-lg pl-4 sm:pl-8">{item.feature}</TableCell>
                  <TableCell>{item.triadsecure && <item.triadsecure size={24} className="m-auto text-white bg-primary rounded-full" />}</TableCell>
                  <TableCell>{item.xdr && <item.xdr size={24} className="m-auto text-white bg-foreground/40 rounded-full" />}</TableCell>
                  <TableCell>{item.soar && <item.soar size={24} className="m-auto text-white bg-foreground/40 rounded-full" />}</TableCell>
                  <TableCell>{item.siem && <item.siem size={24} className="m-auto text-white bg-foreground/40 rounded-full" />}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </section>
  )
}