'use client'

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { UseSidebar } from '@/app/context/useSidebar'
import { useScreen } from '@/app/utils/useScreen'
import { useIcon } from '@/app/utils/useIcons'
import SvgIcon from '@/app/components/general/SvgIcon'
import ChangeTheme from '@/app/components/style/ChangeTheme'
import header from '@/app/styles/components/header.module.scss'

export default function Header() {
  const router = useRouter()
  const icon = useIcon()
  const { setSidebar } = React.useContext(UseSidebar)
  const { lessThanMD, screenWidth, ScreenSize } = useScreen()

  const [showSearchLayer, setShowSearchLayer] = React.useState(false)

  const [footerMenuList] = React.useState([
    { identify: 'home', icon: icon.essetional.home1, go: () => router.push('/') },
    { identify: 'search', icon: icon.search.search, go: () => setShowSearchLayer(true) },
    {
      identify: 'menu',
      icon: icon.settings.menu,
      go: () => toggleSidebar(),
    },
    { identify: 'theme', icon: icon.settings.menu, go: () => router.push('/') },
    { identify: 'up', icon: icon.arrow.arrowUp3, go: () => router.push('/') },
  ])

  function toggleSidebar() {
    if (setSidebar)
      setSidebar(screenWidth <= ScreenSize.XL && screenWidth >= ScreenSize.MD ? 2 : lessThanMD ? 1 : 0)
  }

  return (
    <header className={header.header_wrap}>
      <div className={'w-56 flex items-center max-md:w-auto max-md:min-w-40'}>
        <SvgIcon icon={() => icon.essetional.line()} onClick={toggleSidebar}></SvgIcon>
        <h1 className={'ml-1 text-lg'}>
          <Link href={'/'} rel={'canonical'} title={'HELLO'}>
            HELLO
          </Link>
        </h1>
      </div>
      <div className={'flex-1 flex items-center justify-between'}>
        <div className={header.search}>
          <SvgIcon icon={icon.search.search}></SvgIcon>
          <input className={'h-10 flex-1 text-sm'} type="text" placeholder="搜索..." />
        </div>
        <ul className={'flex items-center'}>
          <li className={'hidden max-md:block'}>
            <SvgIcon icon={icon.search.search} onClick={() => setShowSearchLayer(true)}></SvgIcon>
          </li>
          <li>
            <SvgIcon customizeClass={'relative'} icon={icon.archive.frame}>
              {
                <span className="bg-[var(--my-text-base-color)] absolute top-0 right-1.5 z-1 text-[var(--my-bg-base-color)] rounded-xl text-xs py-0.5 px-1">
                  1
                </span>
              }
            </SvgIcon>
          </li>
          <li>
            <SvgIcon icon={icon.users.profileUser}></SvgIcon>
          </li>
          <li>
            <ChangeTheme></ChangeTheme>
          </li>
        </ul>
      </div>
      {
        showSearchLayer && (
          <div
            className={'max-md:opacity-100 max-md:visible opacity-0 invisible blur-backdrop'}
            onClick={() => setShowSearchLayer(!showSearchLayer)}
          >
            <div className={header.input_box}>
              <SvgIcon icon={icon.search.search} />
              <input className={'w-full h-16 pl-2 text-xs font-thin'} type="text" placeholder="搜索..." />
            </div>
          </div>
        )
      }
      <div className={header.footer_menu}>
        {
          footerMenuList.map(item => (
            <div className={header.footer_menu_list} key={item.identify}>
              <SvgIcon onClick={() => item.go()} icon={item.icon}></SvgIcon>
            </div>
          ))
        }
      </div>
    </header>
  )
}
