import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import Link from 'next/link'

import type { Footer } from '@/payload-types'

import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react'
import TsLogoColorStack from "../../public/ts-logo-color-stack-reverse.svg";
import TsLogoStackReverse from "../../public/ts-logo-sidestack-reverse.svg";
import landscapeImage from "../../public/landscape-background.svg";
import { Media } from '@/components/Media'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const _navItems = footerData?.navItems || []

  return (
    <footer className="relative bg-dark text-white py-28">
      <Media
        src={landscapeImage}
        alt="Landscape background image"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-30"
        fill
      />
      <div className="relative z-10 container flex flex-col gap-16">
        <div className="flex flex-col items-center lg:flex-row lg:items-end lg:justify-between">
          <Link href="/" aria-label="Go to homepage" className="hidden lg:block">
            <Media alt='Triad Secure Logo' src={TsLogoStackReverse} className="h-[60px] w-auto" />
          </Link>
          <Link href="/" aria-label="Go to homepage" className="lg:hidden">
            <Media alt='Triad Secure Logo' src={TsLogoColorStack} className="h-[108px] w-auto" />
          </Link>

          <nav className="hidden lg:block" aria-label="Page sections navigation">
            <ul className="flex gap-12">
              <li><Link href="#features" className="text-base text-light">Features</Link></li>
              <li><Link href="#pricing" className="text-base text-light">Pricing</Link></li>
              <li><Link href="#faq" className="text-base text-light">FAQ</Link></li>
              <li><Link href="#about" className="text-base text-light">About</Link></li>
              <li><Link href="#tools" className="text-base text-light">Tools</Link></li>
            </ul>
          </nav>
          <nav aria-label="Social media links">
            <ul className="flex gap-6 mt-4">
              <li><Link href="#"><Facebook size={24} /></Link></li>
              <li><Link href="#"><X size={24} /></Link></li>
              <li><Link href="#"><Instagram size={24} /></Link></li>
              <li><Link href="#"><Linkedin size={24} /></Link></li>
              <li><Link href="#"><Youtube size={24} /></Link></li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-base-ui-4"></div>
        <div className="flex flex-col gap-8 items-center">
          <nav aria-label="Legal links" className="flex gap-10">
            <Link href="#policy" className="text-sm text-surface-4">Privacy Policy</Link>
            <Link href="#terms" className="text-sm text-surface-4">Terms of Service</Link>
            <Link href="#cookiesettings" className="text-sm text-surface-4">Cookie Settings</Link>
          </nav>
          <div>
            <span className="text-sm text-surface-4">© 2025 Triad-Secure. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}