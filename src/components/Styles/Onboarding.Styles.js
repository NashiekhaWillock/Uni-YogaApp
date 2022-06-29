import tw from 'tailwind-styled-components'

export const OnboardingContainer = tw.main`
xl:w-[700px] m-auto xl:pt-8 xl:pb-8
`
export const SlidesContainer = tw.div`
overflow-hidden w-full lg:w-6/12 md:w-6/12 md:mx-0 lg:mx-0
`
export const SlidesGrid = tw.div`
grid place-items-center mb-6
`
export const SlideImage = tw.img`

`
export const SlideTitle = tw.h1`
mt-2 text-2xl xl:mt-[2rem] mb-44 xl:mb-0 text-white sm:landscape:mb-8
`
export const SlideDesc= tw.p`
text-lg xl:mt-20 mb-16 text-white p-1
`
export const SwiperPagination = tw.div`
swiper-pagination bg-none flex justify-between 
`
export const ButtonContainer = tw.div`
relative w-full 
`
export const BtnSkip = tw.button`
text-xl 
mr-4 
text-white 
font-bold 
absolute 
-right-[22rem] 
sm:-right-[23.5rem] 
md:-right-[46rem] 
xl:landscape:-right-[40rem] 
bottom-0
sm:landscape:-right-[41rem]
md:landscape:-right-[62rem]
`