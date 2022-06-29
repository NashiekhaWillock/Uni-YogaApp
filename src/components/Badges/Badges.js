import { useState, useRef, useEffect } from 'react';
import { useUserAuth } from '../../context/userAuthContext'
import Spinner from '../Misc/Spinner'
import { AnimatePresence } from 'framer-motion';
import { Background, BadgeContainer, BadgeContent, CloseModalButton, Desc, Grid, Heading, ModalWrapper, RoundBadge, SquareBadge, Title } from './BadgesStyles';
import { Button } from '@mui/material';
import MobileAppBar from '../Navigation/MobileAppBar';
import { useNavigate } from 'react-router-dom'
import DataService from "../../hooks/useDataServices"
import { arrayUnion } from 'firebase/firestore';

const Badges = () => {
  const [badgeContent, setBadgeContent] = useState([]);
  const { allBadges, points, loader, currentUser, userID } = useUserAuth();
  const { uid, photoURL } = currentUser;
  const navigate = useNavigate();
  const [badgePoints, setBadgePoints] = useState([])
  const [badgeName, setBadgeName] = useState([])
  const [badges, setBadges] = useState([])
  const newUnlocked = localStorage.getItem("badgesUnlocked")
	const oldUnlocked = JSON.parse(localStorage.getItem("badgesUnlocked"));
  const [unlocked, setUnlocked] = useState(true)
  const [showBadge, setShowBadge] = useState(false)
  const [counted, setCounted] = useState(false)
  const oldUser = JSON.parse(localStorage.getItem("earnedBy"))
  const  unlockedBadges= JSON.parse(localStorage.getItem("unlockedBadges"))
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const badge = JSON.parse(localStorage.getItem('badges'))
 

  // Rewards the
 /*  function myFunction(item, index, arr) {
    arr[index] = console.log(item.pointsToUnlock);
  }
  useEffect(() => {
  
   
   console.log(badge.forEach(myFunction))
    
  },[badge]) */

 /*  useEffect(() => {
    const Rewards = () => {
      let points = []
      let badgeName = []
      allBadges.map((badge) => (
        points.push(badge.pointsToUnlock) +
        badgeName.push(badge.badgeName)
      ))
      setBadgePoints(points)
      setBadgeName(badgeName)
    }

    Rewards()
  }, [allBadges]) */


  useEffect(() => {
    if (localStorage.getItem("earnedBy") === null) {
      localStorage.setItem("earnedBy", '[]')
    }
    if (localStorage.getItem("unlockeedBadges") === null) {
      localStorage.setItem("unlockedBadges", '[]')
    }
  })

/*   useEffect(() => {
    let badges = []
    badgeName.forEach((badge, index) => {

      const point = badgePoints[index];
      badges.push({ badge, point })
    });

    setBadges(badges)
  }, [badgeName, badgePoints])
 */


  
  const BadgeCounter = ( badgeCounter, badgeID, unlockedBy, badgePoints, badgeName) => {

 
    let count = 1;
    if (counted === false) {
     setCounted(true);
 
        setShowBadge(true);
        if(oldUser === null && userID !== "undefined" && userID !==null){
          if (Array.isArray(oldUser)) {
            oldUser.push(userID)
          }
      
        }
          if(oldUser !== null && !oldUser.includes(userID) && badgeCounter === undefined) {
          
          oldUser.push(userID)
          localStorage.setItem("earnedBy", JSON.stringify(oldUser));
     
          DataService.updateBadge(badgeID, { counter: count, unlockedBy: oldUser })
          
          setCounted(false)
          
          } else if (Array.isArray(oldUser)){
            if(!unlockedBy?.includes(userID) && badgeCounter !== undefined){
            // this works
             
            localStorage.setItem("earnedBy", JSON.stringify(oldUser));
            DataService.updateBadge(badgeID, { counter: badgeCounter +=count, unlockedBy: arrayUnion(userID) })
            setCounted(true)
          } else if (!unlockedBy?.includes(userID) && badgeCounter === undefined)
          DataService.updateBadge(badgeID, { counter: count, unlockedBy: arrayUnion(userID) })
          setCounted(true)
        }
        
    }
    if(points===badgePoints) {
   
        if(oldUnlocked === null){
          if (Array.isArray(oldUnlocked)) {
          oldUnlocked?.push(badgeName)
          }
        }
        if (!oldUnlocked?.includes(badgeName)) {
          oldUnlocked?.push(badgeName)
          localStorage.setItem('badgesUnlocked', JSON.stringify(oldUnlocked))
          DataService.updateUser(userID, { BadgesUnlocked: arrayUnion(badgeName) })
        }
      console.log(`you earned ${badgeName} ${new Date()}`)
   
     
        
    }
  }


  // Badge Modal/Pop-UP
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (badge) => {
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    setBadgeContent([badge])
    setShowModal(!showModal);
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };
  
  const backgroundVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const modalVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 100,
      },
    },

    exit: {
      y: -200,
      opacity: 0,
    },
  };

  // function to share badge with the community
  const handleShare = async (data, image) => {
    await DataService.addMessages({
      text: `I have earned the ${data} badge`,
      createdAt: new Date(),
      uid,
      photoURL,
      media: `${image}` || ""
    });
    navigate("/community")
  }

  return (
    <>
     <MobileAppBar />
      <BadgeContainer>
        <Heading>Badges</Heading>
        {loader ? <Spinner msg={"Loading badges"} /> : <Grid>
          {allBadges.map((badge) => (
            <SquareBadge key={badge.badgeID} onClick={() => toggleModal(badge)}>
              {badge.pointsToUnlock <= points ? (<img src={badge.badgeImageUrl} alt={badge.badgeName} onLoad={BadgeCounter(badge.counter, badge.badge, badge.unlockedBy, badge.pointsToUnlock, badge.badgeName)} />)
                : (<><div className="text-2xl font-bold">?</div>
                  <div className="text-base">Super Rare</div>
                  <div className="text-base">{badge.counter ? (Math.round((badge.counter + Number.EPSILON) * 100) / 6).toFixed() + "%" : 0 + "%"}</div>

                </>)}</SquareBadge>
          )
          )}</Grid>}

      {/*   <Heading>Badge Heading</Heading>
        {loader ? <Spinner msg={"Loading badges"} /> : <Grid>
          {allBadges.map((badge) => (
            <RoundBadge key={badge.badgeID} onClick={() => toggleModal(badge)}>{badge.pointsToUnlock === points ? (<img src={badge.badgeImageUrl} alt={badge.badgeName} />) : (<img src={badge.badgeImageLocked} alt={badge.badgeName} />)}</RoundBadge>
          )
          )}</Grid>}

        <Heading>Badge Heading</Heading>
        {loader ? <Spinner msg={"Loading badges"} /> : <Grid>
          {allBadges.map((badge) => (
            <SquareBadge key={badge.badgeID} onClick={() => toggleModal(badge)}>{badge.pointsToUnlock === points ? (<img src={badge.badgeImageUrl} alt={badge.badgeName} />) : (<img src={badge.badgeImageLocked} alt={badge.badgeName} />)}</SquareBadge>
          )
          )}</Grid>} */}
      </BadgeContainer>

      <AnimatePresence>
        {showModal && (
          <Background
            variants={backgroundVariants}
            animate="animate"
            initial="initial"
            onClick={closeModal}
            ref={modalRef}
            exit={{
              opacity: 0,
            }}>
            <ModalWrapper
              variants={modalVariants}
              animate="animate"
              initial="initial"
              exit={{
                opacity: 0,
                y: '-100vh'
              }}
            >{badgeContent.map((pop) => (
              <BadgeContent key={pop.badgeID}>
                <Title>{pop.badgeName}</Title>

                {pop.pointsToUnlock <= points ? (
                 
                 <>
                 <RoundBadge className="rounded-lg hover:animate-pulse ">
                   <img src={pop.badgeImageUrl} alt={pop.badgeName}></img>
                 </RoundBadge>
                 <Desc>{pop.description}</Desc>
                 <Button style={{ padding: 8, backgroundColor: 'black', marginTop: 20, width: '50%', color: '#fff', borderRadius: '5px' }} onClick={() => handleShare(pop.badgeName, pop.badgeImageUrl)}>Share</Button>
                 <Button style={{ padding: 8, backgroundColor: 'yellow', marginTop: 20, width: '50%', color: 'navy', borderRadius: '5px' }} onClick={toggleModal} >View Badges</Button>
               </>) : (
                      <>
                      <RoundBadge className="rounded-lg hover:animate-pulse ">
                        <div className="text-2xl font-bold">?</div>
                        <div className="text-lg">Super Rare</div>
                        <div className="text-base">{pop.counter ? (Math.round((pop.counter + Number.EPSILON) * 100) / 6).toFixed() + "%" : 0 + "%"}</div>
                      </RoundBadge>
                      <Title className="text-lg normal-case">How To Earn This Badge?</Title>
                      <Desc>{pop.description}</Desc></>)
                }
                <CloseModalButton aria-label="Close modal" onClick={toggleModal} /></BadgeContent>))}
            </ModalWrapper>
          </Background>
        )}
      </AnimatePresence>
    </>
  )
}

export default Badges