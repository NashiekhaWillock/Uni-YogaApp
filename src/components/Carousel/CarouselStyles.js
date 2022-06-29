import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Row } from '../globalStyles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export const CarouselImage = tw.img`

`;

export const ButtonContainer = tw(Row)`	
m-auto
md:m-0
hidden
md:flex
`;

export const VideoSlider = styled(Slider)`
width: 100%;
.slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
}
.slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
}
.slick-list {
    overflow: hidden;
}

`;

export const CarouselContainer = tw.div`
mt-5
relative
w-full
flex 
flex-col 
even-columns 
cursor-pointer 
text-black
p-[0px_4px]
border-box
`
export const Card = tw.div`
mb-5
xl:mb-20
w-[170px]
h-[250px]
flex 
outline-none
bg-gray-200
dark:bg-white 
rounded-lg
shadow 
overflow-hidden 
flex-col
even-columns
md:w-[220px]
xl:w-[270px]
items-center
justify-center
m-auto
relative
`
export const SmallHeading = tw.p`
text-center
text-base
flex-grow
text-black
w-full
flex-grow
p-0
`
export const Label = tw.div`
absolute top-0 right-0 text-lg pl-4 pr-1 rounded-bl-full text-white
`