
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import HeaderComponent from './header'
import { draftMode } from 'next/headers'
import DesktopMenuBar from './desktop-menu-bar'
import MobileMenuBar from './mobile-menu-bar'

export default async function NavigationBar() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const { isEnabled } = await draftMode()

  return (
    <>
      <HeaderComponent displayAdminBar={isEnabled}>
        <DesktopMenuBar data={headerData} />
        <MobileMenuBar data={headerData} />
      </HeaderComponent>

    </>
  )
}
