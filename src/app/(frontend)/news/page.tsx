import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'


export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 lg:pt-36 pb-24 relative">
      <div className="container flex flex-col gap-8 ">
        <div className="absolute inset-0 -z-10 h-full bg-dark " />
        <PageClient />

        <div className="prose prose-h1:text-3xl lg:prose-h1:text-6xl prose-h1:capitalize prose-h1:font-medium text-background">
          <h1>Latest News</h1>
        </div>

        <CollectionArchive posts={posts.docs} />

        <div className="">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
        <div className="self-end text-background">
          <PageRange
            collection="posts"
            currentPage={posts.page}
            limit={12}
            totalDocs={posts.totalDocs}
          />
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Triad Secure Posts`,
  }
}
