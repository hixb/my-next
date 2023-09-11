'use client'

import React from 'react'
import Link from 'next/link'
import type { SidebarAlways } from '@/app/context/useSidebar'
import type { Relation } from '@/types'
import { useIcon } from '@/app/utils/useIcons'
import { UseSidebar } from '@/app/context/useSidebar'
import { useScreen } from '@/app/utils/useScreen'
import style from '@/app/styles/components/sidebar.module.scss'
import SvgIcon from '@/app/components/general/SvgIcon'

interface SidebarItemParams {
  link: string
  title: string
  rel: Relation[]
  icon?: () => React.JSX.Element
  activeIcon?: () => React.JSX.Element
  active?: boolean
  sublist?: SidebarItemParams[]
}

interface FixedListType {
  link: string
  rel: Relation[]
  icon?: () => React.JSX.Element
  title?: string
}

export default function Sidebar() {
  const SUBCLASS_HEIGHT = 32

  const { openSidebar, setSidebar } = React.useContext(UseSidebar)
  const { lessThanMD, screenWidth, ScreenSize } = useScreen()
  const icon = useIcon()

  const [fixedList] = React.useState<{
    top: FixedListType[]
    bottom: FixedListType[]
  }>({
    top: [
      { title: '网站地图', link: '/', rel: [] },
      { title: '免责声明', link: '/', rel: [] },
      { title: '隐私', link: '/', rel: [] },
    ],
    bottom: [
      { icon: icon.cryptoCompany.twitch, link: '/', rel: ['nofollow', 'noopener'] },
      { icon: icon.cryptoCompany.facebook, link: '/', rel: ['nofollow', 'noopener'] },
      { icon: icon.cryptoCompany.whatsapp, link: '/', rel: ['nofollow', 'noopener'] },
      { icon: icon.cryptoCompany.google, link: '/', rel: ['nofollow', 'noopener'] },
    ],
  })

  const [sidebarList] = React.useState<{
    [key: string]: SidebarItemParams[]
  }>({
    public: [
      { icon: icon.essetional.home, link: '/', title: '首页', rel: ['canonical'] },
      {
        icon: icon.files.folderMinus,
        link: '',
        title: '分类',
        activeIcon: icon.files.folderOpen,
        active: false,
        rel: [],
        sublist: [
          { link: '/', title: 'CSS', rel: [] },
          { link: '/', title: 'HTML', rel: [] },
          { link: '/', title: 'JavaScript', rel: [] },
          { link: '/', title: 'TypeScript', rel: [] },
          { link: '/', title: 'Node', rel: [] },
          { link: '/', title: 'Vue or Nuxt', rel: [] },
          { link: '/', title: 'React or Next', rel: [] },
          { link: '/', title: '其他', rel: [] },
        ],
      },
    ],
    about: [
      { icon: icon.users.profileUser, link: '/about', title: '关于', rel: ['author'] },
      { icon: icon.cryptoCompany.iconIcx, link: '/icon', title: '图标库', rel: [] },
    ],
  })

  const useDropDownSubListRef = React.useRef<HTMLUListElement>(null)

  React.useEffect(() => {
    if (!openSidebar) {
      for (const key in sidebarList)
        sidebarList[key].map(item => item.active = false)

      if (useDropDownSubListRef.current)
        useDropDownSubListRef.current.style.height = '0px'
    }
  }, [openSidebar])

  React.useEffect(() => {
    if (screenWidth < ScreenSize.MD + 100 || screenWidth <= ScreenSize.XL)
      setSidebarActive(2)
  }, [screenWidth])

  React.useEffect(() => {
    if (screenWidth <= ScreenSize.MD || screenWidth <= ScreenSize.XL)
      setSidebarActive(2)
  }, [])

  function setSidebarActive(always: SidebarAlways) {
    if (screenWidth <= ScreenSize.XL && screenWidth >= ScreenSize.MD)
      always = 2

    if (setSidebar)
      setSidebar(always)
  }

  function transitionState(item: SidebarItemParams) {
    if (!openSidebar || !useDropDownSubListRef?.current)
      return

    if (item.sublist?.length)
      item.active = !item.active

    if (useDropDownSubListRef.current && item.sublist?.length)
      useDropDownSubListRef.current.style.height = `${item.active ? item.sublist?.length * SUBCLASS_HEIGHT : 0}px`
  }

  return (
    <>
      <section
        className={
          `shrink-0 relative z-1 max-md:fixed max-md:invisible max-md:opacity-0 max-md:!z-40 border-r border-[var(--my-dark-border)] transition-[width] shadow-[0_0_15px_rgba(0,0,0,0.07)] z-20
          ${openSidebar ? 'w-60' : 'w-20'}
          ${lessThanMD && openSidebar ? `${style.open_sidebar} !h-[calc(100vh-40px)] !z-20 !w-10/12 !rounded-3xl max-md:!visible max-md:!opacity-100` : ''}
          ${lessThanMD && !openSidebar ? style.close_sidebar : ''}`
        }
      >
        <div className={'sticky top-16'}>
          <div
            className={
              `flex text-xs relative h-[calc(100vh-64px)] pb-20 flex-col p-5 transition-[var(--my-theme-trans3)]
              ${!openSidebar ? 'px-4' : ''}
              ${lessThanMD && openSidebar ? '!rounded-3xl overflow-hidden !pt-16' : ''}`
            }
          >
            {
              lessThanMD
                ? (
                  <div className={'absolute top-2 left-8 flex items-center cursor-pointer'}>
                    <SvgIcon
                      icon={() => icon.essetional.closeSquare(40)}
                      onClick={() => setSidebarActive(2)}
                      isOpenHover={false}
                    ></SvgIcon>
                    关闭
                  </div>
                  )
                : null
            }
            {
              Object.keys(sidebarList).map((item, index) => (
                <div
                  key={item}
                  className={`${style.menu_list} ${Object.keys(sidebarList).length === index + 1 ? 'after:!content-none' : ''}`}
                >
                  <ul className={'flex flex-col'}>
                    {
                      sidebarList[item].map((v, i) => (
                        <li key={i} className={'group w-full px-1 relative'}>
                          {
                            v.link
                              ? (
                                <Link
                                  href={v.link}
                                  className={`items-center whitespace-normal ${style.menu_item}`}
                                  rel={v.rel.join(' ')}
                                >
                                  {v.icon && <SvgIcon icon={v.icon} isOpenHover={false}></SvgIcon>}
                                  <span className={`${openSidebar ? 'block' : 'hidden'} line-clamp-1`}>
                                    {v.title}
                                  </span>
                                </Link>
                                )
                              : (
                                <div className={'flex flex-col items-start'}>
                                  <div className={`${style.menu_item} flex items-center relative w-full`}
                                    onClick={() => transitionState(v)}>
                                    {
                                      v.activeIcon
                                      && v.icon
                                      && <SvgIcon icon={v.active ? v.activeIcon : v.icon} isOpenHover={false}></SvgIcon>
                                    }
                                    <span className={`${openSidebar ? 'block' : 'hidden'} line-clamp-1`}>
                                      {v.title}
                                    </span>
                                    {
                                      openSidebar
                                        ? <SvgIcon
                                            customizeClass={`${v.active ? 'rotate-180' : ''} absolute top-0 bottom-0 right-1.5 m-auto`}
                                            icon={() => icon.arrow.arrowDown(13)}
                                            overallSize={30}
                                            isOpenHover={false}
                                          ></SvgIcon>
                                        : null
                                    }
                                  </div>
                                  <ul
                                    ref={useDropDownSubListRef}
                                    className={`${style.sub_list} flex items-center flex-col transition-[var(--my-theme-trans3)] z-20 overflow-hidden h-0`}
                                  >
                                    {
                                      v.sublist?.map((sub, idx) => (
                                        <li
                                          key={idx}
                                          className={`${style.menu_item} ${style.sublist_item} relative transition-[var(--my-theme-trans2)] !h-[${SUBCLASS_HEIGHT}px] ${v.active ? 'visible opacity-100' : 'invisible opacity-0'}`}
                                        >
                                          <Link href={sub.link} rel={sub.rel.join(' ')}>
                                            {sub.title}
                                          </Link>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                                )
                          }
                          {
                            !openSidebar && (
                              v.link
                                ? (
                                  <span className={`${style.prompt_bubble} group-hover:opacity-100 group-hover:visible px-4`}>
                                    {v.title}
                                  </span>
                                  )
                                : <span className={`!flex flex-col ${style.prompt_bubble} group-hover:opacity-100 group-hover:visible`}>
                                  {
                                      v.sublist?.map((sub, idx) => (
                                        <Link
                                          key={idx}
                                          href={sub.link}
                                          rel={sub.rel.join(' ')}
                                          className={'h-8 flex items-center hover:text-[var(--my-special-color)] hover:bg-[var(--my-transB)] hover:transition-[var(--my-theme-trans3)] px-4'}
                                        >
                                          {sub.title}
                                        </Link>
                                      ))
                                    }
                                </span>
                            )
                          }
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
            <div
              className={`z-1 ${style.sidebar_footer} ${openSidebar ? 'w-60' : 'w-20'} ${lessThanMD ? 'max-w-[480px] !w-full bottom-0 border-r-0 !absolute' : ''}`}>
              {
                openSidebar
                  ? (
                    <>
                      <ul className={'flex items-center justify-center truncate'}>
                        {
                          fixedList.top.map((item, index) => (
                            <li key={index}
                              className={'after:content-["·"] after:px-1.5 last-of-type:after:content-none'}>
                              <Link
                                href={item.link}
                                rel={item.rel.join(' ')}
                                className={'hover:underline hover:opacity-70 transition-[var(--my-theme-trans1)]'}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                      <ul className={'flex items-center justify-center mt-1'}>
                        {
                          fixedList.bottom.map((item, index) => (
                            <li key={index}>
                              <Link href={item.link} rel={item.rel.join(' ')}>
                                {item.icon && <SvgIcon icon={item.icon}></SvgIcon>}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </>
                    )
                  : <SvgIcon icon={icon.essetional.add} onClick={() => setSidebarActive(0)}></SvgIcon>
              }
            </div>
          </div>
        </div>
      </section>
      <div
        onClick={() => setSidebarActive(2)}
        className={`blur-backdrop invisible opacity-0 transition-[var(--my-theme-trans2)] max-md:!z-30 ${openSidebar && lessThanMD ? '!opacity-100 !visible transition-[var(--my-theme-trans2)]' : ''}`}
      ></div>
    </>
  )
}
