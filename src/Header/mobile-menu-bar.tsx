'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CustomLink from '@/components/shared/custom-link';
import { Header } from '@/payload-types';
import { Media } from '@/components/Media';
import tsLogo from '../../public/ts-logo.svg';

interface MobileMenuBarProps {
  data: Header;
}

export default function MobileMenuBar({ data }: MobileMenuBarProps) {
  const { navItems } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='lg:hidden w-full bg-foreground'>
      {/* Mobile Header Bar */}
      <div className='flex items-center justify-between px-4 py-3 container'>
        {/* Logo */}
        <CustomLink
          url={'/'}
          className='inline-flex relative h-6 w-32 flex-shrink-0'
        >
          <Media
            src={tsLogo}
            alt='Triad Secure brand logo'
            priority
            className='h-full w-full'
          />
        </CustomLink>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className='p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-background'
          aria-label='Toggle mobile menu'
        >
          {isMenuOpen ? (
            <X className='h-6 w-6' />
          ) : (
            <Menu className='h-6 w-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='absolute top-full left-0 right-0 bg-foreground shadow-lg'
          >
            <div className='px-4 py-6 space-y-4'>
              {/* Navigation Links */}
              {navItems && navItems.length > 0 && (
                <div className='space-y-3'>
                  {navItems.map(({ link }, index) => (
                    <div key={`mobile-nav-${index}`} className='pb-3'>
                      <div onClick={() => setIsMenuOpen(false)}>
                        <CustomLink
                          {...link}
                          appearance='navigation-link'
                          className='block py-2 text-lg font-medium hover:text-primary transition-colors'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <div className='pt-4'>
                <div onClick={() => setIsMenuOpen(false)}>
                  <CustomLink
                    size='lg'
                    label='Get a demo'
                    url='/demo'
                    appearance='default'
                    className='w-full justify-center'
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 