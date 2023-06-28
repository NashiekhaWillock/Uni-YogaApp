import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "../../styles.css";
import Splash from "./Splash";
import { OnboardingContainer, SlideDesc, SlideImage, SlidesContainer, SlidesGrid, SlideTitle, SwiperPagination, ButtonContainer, BtnSkip } from "../Styles/Onboarding.Styles";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Onboarding() {
  let navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "What is Yoga?",
      description:
        "Yoga is an ancient form of exercise that emphasizes strength, flexibility, and breathing and is a healthy way to boost physical and mental well-being.",
      image:
        require("../../assets/yoga-wht.png"),
        size: "w-4/5 h-4/5 landscape:sm:w-2/5 sm:landscape:mt-16 landscape:sm:h-28",
      color: "bg-slide-one",
      alt: "Yoga logo"
    },
    {
      id: 2,
      title: "Konstantin Stanislavski",
      description:
        "A seminal figure of Soviet and Russian theatre artist.",
      image:
        require("../../assets/konstantin.jpg"),
      size: "w-64 h-64 sm:landscape:w-44 sm:landscape:h-44 sm:landscape:mt-10",
      color: "bg-slide-two",
      alt: "Picture of Konstantin Stanislavski"
    },
    {
      id: 3,
      title: "Ready To Begin Your Quest",
      description:
        "Towards Achieving Embodiment?",
      image:
        require("../../assets/poses-wht.png"),
      color: "bg-slide-three",
      alt: "poses",
      size: "w-64 h-64 sm:landscape:w-44 sm:landscape:mt-8 sm:landscape:h-44"
    },
  ];

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <> {loading ? <Splash /> : (
      <OnboardingContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            "clickable": true
          }} navigation={true} className="h-screen xl:rounded-2xl" >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className={slide.color}>
              <SlidesContainer>
                <SlidesGrid>
                  <SlideImage className={slide.size} src={slide.image} alt={slide.alt}></SlideImage>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideDesc>{slide.description}</SlideDesc>
                </SlidesGrid>
              </SlidesContainer>
            </SwiperSlide>))}
          <SwiperPagination>
            <ButtonContainer>
              <BtnSkip onClick={() => { navigate("/signin") }} >
                Skip
              </BtnSkip>
            </ButtonContainer>
          </SwiperPagination>
        </Swiper>
      </OnboardingContainer>
    )}
    </>
  )
}
