
import CustomLink from '@/components/shared/custom-link';
import { Header } from '@/payload-types';
import { Media } from '@/components/Media';
import tsLogo from '../../public/ts-logo.svg';

interface DesktopMenuBarProps {
  data: Header;
}
export default function DesktopMenuBar({ data }: DesktopMenuBarProps) {
  const { navItems } = data;
  return (
    <div className='hidden lg:flex-1 relative container lg:flex items-center justify-between'>
      {/* Logo */}
      <CustomLink
        url={'/'}
        className='inline-flex relative h-8 w-56 flex-shrink-0'
      >
        <Media
          src={tsLogo}
          alt='Triad Secure brand logo'
          priority
          className='h-full w-full'
        />
      </CustomLink>
      {/* Navgiation Links */}
      <div className='flex items-center justify-center gap-x-4'>
        {navItems && navItems.length > 0 && navItems.map(({ link }, index) => <CustomLink key={`nav-links-${index}`} {...link} appearance='navigation-link' />)}

      </div>
      <div className='flex items-center gap-x-4'>
        <CustomLink label='Log in' url='#' appearance='navigation-link' />
        <CustomLink size='lg' label='Get a demo' url='/contact' appearance='default' />
      </div>

    </div>
  );
}
