import type { Page } from '@/payload-types'
import RichText from '@/components/shared/rich-text'

type LowImpactHeroType =
  | {
    children?: React.ReactNode
    richText?: never
  }
  | (Omit<Page['hero'], 'richText'> & {
    children?: never
    richText?: Page['hero']['richText']
  })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <section className="relative flex min-h-[40vh] w-full">
      <div className="z-10 container flex flex-col justify-center items-center gap-4">
        <div className='max-w-2xl'>
          {children || (richText && <RichText className='text-center prose-p:font-medium prose-p:my-0 prose-h1:text-foreground prose-p:text-foreground/80' data={richText} enableGutter={false} />)}
        </div>
      </div>
    </section>
  )
}
