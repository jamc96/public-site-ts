import Image from 'next/image';
import militaryImage from "../../../public/military.jpg";
import camoBgImage from "../../../public/camo-background-lg.svg";
import logoIcon from "../../../public/ts-logoicon-sidestack.svg";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface-1">
      <Image
        src={camoBgImage}
        alt="Background image"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative z-10 container py-28 flex flex-col gap-16">
        <div className="items-start gap-8 bg-dark/70 px-6 py-6 md:py-16 lg:flex lg:px-32 rounded-2xl">
          <Image src={logoIcon} alt="TriadSecure logoIcon" className="mb-8 lg:mt-3 lg:mb-0" />
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-semibold text-light md:mb-9 md:text-5xl">
              Veteran-Led Cybersecurity Expertise for Your SOC
            </h2>
            <h3 className="max-w-2xl text-xl text-info md:text-xl">
              We’re driven by a mission to simplify and strengthen Security Operations Centers (SOCs)
              with AI-powered innovation.
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image src={militaryImage} alt="Military" className="w-full h-auto object-cover shadow-xl ring-1 ring-white/10" />
          </div>
          <div className="bg-light p-14 prose ">
            <p>
              At Triad Secure, we’re driven by a mission to simplify and strengthen Security
              Operations Centers (SOCs) with AI-powered innovation. Founded by military veterans Tyler
              Arnone and Jake Smith, our team brings decades of cybersecurity expertise to tackle the
              toughest challenges faced by MSSPs and large SOC teams.
            </p>
            <p>
              Tyler and Jake have dedicated their entire careers to cybersecurity, starting with their
              service in the U.S. military, where they honed their skills in high-stakes cyber defense
              operations. From protecting critical infrastructure to thwarting advanced threats, their
              experience spans the full spectrum of security operations. After their military service,
              they continued to lead the charge in the private sector, designing cutting-edge
              solutions for SOCs worldwide.
            </p>
            <p>
              Together, they built Triad Secure to unify fragmented tools, automate repetitive tasks,
              and empower teams with actionable insights—saving time, reducing costs, and enhancing
              security. Our veteran-led perspective ensures a relentless focus on reliability,
              precision, and scalability, delivering a platform that MSSPs and large SOCs can trust to
              stay ahead of evolving threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}