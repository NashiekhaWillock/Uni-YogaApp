import styled from "tailwind-styled-components";

export const Container = styled.div`
p-3 pb-20 md:pt-4 min-h-full h-full pt-20 pb-16 md:pt-28 xl:pt-16 bg-gradient-to-br from-[#702963] via-[#536B6F] to-[#AA98A9] dark:bg-gradient-to-bl dark:from-gray-900 dark:via-primary-green dark:to-black transition duration-500
`
export const Grid = styled.div`
grid grid-flow-col grid-cols-2 auto-cols-max gap-2 md:gap-4 mt-4 mb-4
`

export const SmallCardContainer = styled.div`
flex xl:m-auto xl:w-full
`
export const SmallCard = styled.div`
w-full  h-full cursor-pointer  relative bg-gray-400 rounded-md bg-clip-padding bg-opacity-10 border border-gray-100 shadow-md
`


export const SmallCardInner = styled.div`
flex flex-1 pb-10  p-2  
`
export const SmallCardFlex = styled.div`
flex-1
`
export const SmallCardLine = styled.div`
h-2 w-20 md:w-32 xl:w-40 mb-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md
`
export const SmallTitle= styled.div`
pt-6 text-center text-xl text-white lg:mt-20 font-bold md:mt-10 md:text-2xl md:font-bold
`

export const InnerCard= styled.div`
flex m-auto rounded-xl w-28 lg:w-56 lg:h-48 md:w-45 h-24 md:w-64 md:h-36 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md 
`

export const CardIcon= styled.div`
flex justify-center mb-2 items-center lg:mt-2 w-20 md:w-28 m-auto 
`

export const BannerContainer= styled.div`
flex bg-gray-400 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md mt-2 md:mt-10 xl:mt-10
`
export const Banner= styled.div`
 md:mt-10 m-auto w-full mt-2 rounded-lg flex flex-col
`
export const BannerInner= styled.div`
w-full mb-2
`

export const BannerText= styled.p`
text-2xl text-gray-200 ml-1 pt-2 justify-between w-full text-center typed-out
`


export const BigCard= styled.div`
h-42 text-gray-200 flex flex-col bg-gray-400 border rounded-md bg-clip-padding backdrop-filter bg-opacity-10 shadow-md
`
export const BigCardH1= styled.h1`
text-xl md:text-3xl font-bold text-center mb-2
`

export const BigCardText= styled.p`
md:text-2xl m-auto items-center justify-center text-sm font-bold text-center 
`
export const IconContainer= styled.div`
flex p-2  w-28 md:h-28 landscape:w-28 landscape:h-28 md:w-40 md:h-36 mb-2 bg-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100  shadow-md justify-center items-center mr-2 cursor-pointer
`