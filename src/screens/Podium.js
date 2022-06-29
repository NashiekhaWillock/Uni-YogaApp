import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { BottomNav, PodiumBoard, MobileAppBar, DesktopAppBar } from '../components/index';
import '../styles.css';


const Podium = () => {
  return (
    <>
     <MobileAppBar />
  {/*     <BrowserView>
      <DesktopAppBar />
      </BrowserView> */}
    
      <PodiumBoard />
      
      <MobileView>
      <BottomNav />
      </MobileView>
    </>
  )
};

export default Podium;
