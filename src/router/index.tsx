import React, { lazy, Suspense, ReactNode } from 'react'

import { RouteObject } from 'react-router-dom'

import ZLLayout from '@/pages/layout'
const ZLHome = lazy(() => import('@/pages/home'))
const ZLAbout = lazy(() => import('@/pages/about'))
const ZLCount = lazy(() => import('@/pages/count'))
const ZLLogin = lazy(() => import('@/pages/login'))
const NotFond = lazy(() => import('@/pages/notFond'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>loading...</h1>}>{children}</Suspense>
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ZLLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<ZLHome />)
      },
      {
        path: 'about',
        element: lazyLoad(<ZLAbout />)
      },
      {
        path: 'count',
        element: lazyLoad(<ZLCount />)
      }
    ]
  },
  {
    path: '/login',
    element: lazyLoad(<ZLLogin />)
  },
  {
    path: '*',
    element: lazyLoad(<NotFond />)
  }
]
