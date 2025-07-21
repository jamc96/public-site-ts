'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import type { Header } from '@/payload-types'
import { AdminBar } from '@/components/AdminBar'
import { HeaderNav } from './Nav'

export const HeaderClient: React.FC<{
  data: Header
  displayAdminBar: boolean
}> = ({ data, displayAdminBar }) => {
  const { headerTheme: _headerTheme } = useHeaderTheme()

  return (
    <div className="fixed top-0 z-50 w-full">
      <AdminBar
        adminBarProps={{
          preview: displayAdminBar,
        }}
      />
      <div className="lg:hidden fixed inset-x-0 top-0 z-[999] w-full">
        <HeaderNav data={data} />
      </div>
    </div>
  )
}
