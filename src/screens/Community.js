import React, { useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import ChatRoom from '../components/Chat/ChatRoom';
import Header from '../components/Chat/Header';
import { BottomNav, DesktopAppBar, MobileAppBar } from '../components/index';
import useDarkMode from '../hooks/useDarkMode';

const Community = () => {
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(()=>{
    setTheme(localStorage.theme);
  },[setTheme])
  return (
    <>
       <Header />
    
     <div className="pb-14">
        <ChatRoom />
        </div>
 
    </>
  )
};

export default Community;
