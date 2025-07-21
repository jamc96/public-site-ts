'use client';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { AdminBar } from '@/components/AdminBar';

export default function Header({
  children,
  displayAdminBar
}: {
  children: React.ReactNode;
  displayAdminBar: boolean;
}) {
  const defaultNavBarHeight = 80;
  const { scrollY } = useScroll();
  const [navHeight, setNavHeight] = useState<number>(defaultNavBarHeight);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      const scrolled = scrollY.get() > 50;
      setNavHeight(scrolled ? defaultNavBarHeight - 15 : defaultNavBarHeight);
      setIsScrolled(scrolled);
    };

    const unsubscribe = scrollY.on('change', updateHeight);

    return () => unsubscribe();
  }, [scrollY]);


  return (
    <div className='top-0 fixed z-50 w-full'>
      {/* Display Desktop */}
      <AdminBar
        adminBarProps={{
          preview: displayAdminBar,
        }}
      />
      <AnimatePresence>
        <motion.nav
          className={clsx(
            'hidden inset-x-0 lg:flex flex-col w-full transition duration-300 ease-in-out',
            {
              'dark:bg-background/75 bg-foreground/70 backdrop-blur-md': true,
              // 'bg-transparent': !isScrolled,
            }
          )}
          initial={false}
          animate={{ height: navHeight }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ height: defaultNavBarHeight }}
        >

          <motion.div
            variants={{
              visible: {
                opacity: 1,
                height: 'auto',
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              },
              hidden: {
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              },
            }}
            initial="visible"
            animate={isScrolled ? 'hidden' : 'visible'}
          >
          </motion.div>
          {children}
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Navigation */}
      <div className='lg:hidden fixed inset-x-0 top-0 z-[999] w-full'>
        {children}
      </div>
    </div>
  );
}