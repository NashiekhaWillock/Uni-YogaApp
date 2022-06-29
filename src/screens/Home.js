import { DesktopAppBar, MobileAppBar, BottomNav, Quotes, VideoLibraryIcon } from '../components/index';
import { useUserAuth } from "../context/userAuthContext";
import { useNavigate } from "react-router";
import useForm from '../components/Forms/useForm';
import { podium } from '../assets/images';
import { BrowserView, MobileView } from 'react-device-detect';
import { VscFileSubmodule } from 'react-icons/vsc'
import { IoIosPeople } from 'react-icons/io'
import { MdLeaderboard } from 'react-icons/md'
import {
  Container, SmallCard, SmallTitle, InnerCard, CardIcon, BannerContainer, Banner, BannerInner, BannerText, SmallCardContainer, SmallCardOuter,
  SmallCardInner, SmallCardFlex, SmallCardLine, BigCard, BigCardH1, BigCardText, IconContainer, Grid
}
  from '../components/Styles/Home.Syles'
import Platform from 'react-platform-js'

const Home = () => {

  const { currentUser } = useUserAuth();
  const { username } = useForm()
  const navigate = useNavigate();
  localStorage.setItem("registered", true)


  return (

    <>


      <MobileAppBar />
      {/*     <BrowserView>
      <DesktopAppBar />
      </BrowserView> */}
      <Container>
        <main className="xl:w-[1000px] h-full min-h-screen landscape:pl-8 landscape:pr-4 pt-10 m-auto">
          <BannerContainer>
            <Banner>
              <BannerInner>
                <BannerText>Welcome {currentUser?.displayName ? currentUser.displayName : currentUser?.email}</BannerText>

              </BannerInner>
              <Quotes />
            </Banner>
          </BannerContainer>

          <Grid>
            <SmallCardContainer onClick={() => { navigate("/sessions") }}>
              <SmallCard>

                <SmallCardInner>
                  <SmallCardFlex>
                    <SmallCardLine></SmallCardLine>
                    <InnerCard>
                      <CardIcon><VideoLibraryIcon style={{ fontSize: '5rem', color: 'white' }} /></CardIcon>

                    </InnerCard>
                    <SmallTitle>Sessions</SmallTitle>
                  </SmallCardFlex>
                </SmallCardInner>
              </SmallCard>
            </SmallCardContainer>
            <SmallCardContainer onClick={() => { navigate("/community") }}>
              <SmallCard>

                <SmallCardInner>
                  <SmallCardFlex>
                    <SmallCardLine></SmallCardLine>
                    <InnerCard>
                      <CardIcon>
                        <IoIosPeople style={{ fontSize: '5rem', color: 'white' }} />
                      </CardIcon>
                    </InnerCard>
                    <SmallTitle>Community</SmallTitle>
                  </SmallCardFlex>
                </SmallCardInner>
              </SmallCard>
            </SmallCardContainer>
          </Grid>

          <BigCard  onClick={() => { navigate("/sessions") }}>
            <BigCardH1>Feel Like A Challenge?</BigCardH1>
            <div className="flex justify-between">
              <BigCardText>Take Part In The Tutor's Challenge!</BigCardText>
              <IconContainer>
                <CardIcon>
                  <img src={podium} width="100" height="70" alt="" className="md:w-24" />
                </CardIcon>
              </IconContainer>
            </div>
          </BigCard>
          <Grid>
            <SmallCardContainer onClick={() => { navigate("/podium") }}>
              <SmallCard>

                <SmallCardInner>
                  <SmallCardFlex>
                    <SmallCardLine></SmallCardLine>
                    <InnerCard>
                      <CardIcon>
                        <MdLeaderboard style={{ fontSize: '5rem', color: 'white' }} />
                      </CardIcon>
                    </InnerCard>
                    <SmallTitle>Podium</SmallTitle>
                  </SmallCardFlex>
                </SmallCardInner>
              </SmallCard>
            </SmallCardContainer>

            <SmallCardContainer >
              <SmallCard>

                <SmallCardInner>
                  <SmallCardFlex>
                    <SmallCardLine></SmallCardLine>
                    <InnerCard>
                      <CardIcon>
                        <VscFileSubmodule style={{ fontSize: '5rem', color: 'white' }} />
                      </CardIcon>
                    </InnerCard>
                    <SmallTitle>Resources</SmallTitle>
                  </SmallCardFlex>
                </SmallCardInner>
              </SmallCard>
            </SmallCardContainer>
          </Grid>
        </main>

      </Container>
      <MobileView>
        <Platform rules={{ Browser: 'Mobile Safari', OS: 'iOS' }}>
          Only Mac OS computer will see this text.
          <MobileAppBar />

          <BottomNav />
        </Platform>
      </MobileView>
    </>

  )
};



export default Home;
