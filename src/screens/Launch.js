import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { AsyncStorage } from 'AsyncStorage';
import { Onboarding, Splash } from '../components/index'
import { Navigate } from 'react-router-dom';

const Launch = () => {

  const [loading, setLoading] = useState(false)

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <>
        <MobileView>
          <Onboarding />
        </MobileView>

        <BrowserView>{<Navigate to="/signin" />
        }</BrowserView>
      </>
    )
  } else {
    return (
      <Navigate to="/signin" />
    )
  }
}
export default Launch;