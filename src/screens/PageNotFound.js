import React from 'react'
import { BrowserView } from 'react-device-detect';
import { BottomNav, DesktopAppBar, MobileAppBar } from '../components/index';

const PageNotFound = () => {
  return (
    <>
      <MobileAppBar />
  
    <div className="h-screen min-h-full bg-gray-300 pt-32 dark:bg-slate-800">
      <div className="text-2xl uppercase text-center text-black dark:text-white">Sorry Page not found!</div>
    </div>
    </>
  )
}

export default PageNotFound