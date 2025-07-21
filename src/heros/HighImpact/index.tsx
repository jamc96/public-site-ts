import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/shared/rich-text'
import CustomLink from '@/components/shared/custom-link'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <section className="relative flex min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        {media && typeof media === 'object' && (
          <Media className='absolute inset-0 h-full w-full object-cover object-bottom' resource={media} />
        )}
      </div>

      <div className="z-10 container flex flex-col justify-center items-center gap-4">
        {richText && <div className='max-w-4xl'><RichText className='text-center prose-p:font-medium prose-p:my-0 prose-h1:text-background prose-p:text-background/80 dark:prose-h1:text-foreground dark:prose-p:text-foreground/80' data={richText} enableGutter={false} /></div>}
        <div className='mt-4 flex gap-4'>
          {links && links.map(({ link }, index) => <CustomLink key={`hero-link-${index}`} {...link} size={'xl'} />)}
        </div>
      </div>
    </section>
  )
}
