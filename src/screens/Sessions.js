import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { BottomNav, Carousel, DesktopAppBar, MobileAppBar } from '../components/index';
import { Container } from '../globalStyles';
const Exercises = () => {
  return (
  <>
        <MobileAppBar />
    {/*   <BrowserView>
      <DesktopAppBar />
      </BrowserView> */}
     
      <div className="pl-2 pr-2 pt-36 pb-16 md:pt-28 xl:pt-32 text-center text-black dark:text-white text-2xl bg-[#6d5a7aa4] dark:bg-[#342a3a] h-full min-h-screen">
   <div className="text-3xl md:text-4xl text-center mb-10 text-black dark:text-white">Sessions</div>
      <Carousel />

      </div>
      <MobileView>
      <BottomNav />
      </MobileView>
      </>
  )
};

export default Exercises;
