import { Golos_Text } from 'next/font/google';
export const golos = Golos_Text({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
    style: ['normal'],
    variable: '--font-golos',
});
