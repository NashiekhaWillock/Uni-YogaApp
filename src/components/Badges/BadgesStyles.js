import tw from 'tailwind-styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

export const BadgeContainer = tw.div `
flex-grow 
h-full 
min-h-screen
list-none  
pt-8 
m-auto 
desktop:px-4 
px-2 
tabletLg:px-8 
font-opensans 
landscape:tablet:p-11 
landscape:mobile:pt-20 
landscape:tablet:pt-20 
landscape:tabletLg:pt-24 mt-6 
`

export const Title = tw.h3 `
text-lg
uppercase
mb-4
`

export const Desc = tw.p `
text-base
pt-4
`

export const BadgeContent = tw.div `
flex flex-col w-full text-center mt-16 items-center justify-center m-auto
`

export const Grid = tw.div`
grid 
grid-cols-3  
gap-2
m-auto
pb-10
landscape:grid 
md:w-[600px]
xl:w-[700px]
grid-col-1 
landscape:mobile:grid-cols-2 
desktop:grid-cols-3
`
export const Heading = tw.p`
list-none text-xl text-center font-bold text-white uppercase mb-4
`

export const SquareBadge = tw.div`
flex 
w-28
h-28
md:w-36
md:h-36
xl:w-36
xl:h-36
bg-white 
rounded-xl 
shadow 
overflow-hidden 
flex-col 
m-auto
even-columns
items-center 
justify-center
cursor-pointer
mb-4
`

export const RoundBadge = tw.div`
flex 
w-28
h-28
md:w-36
md:h-36
xl:w-36
xl:h-36
bg-white 
rounded-full
shadow 
overflow-hidden 
flex-col 
m-auto
even-columns
items-center 
justify-center
cursor-pointer
mb-4
`

export const Background = tw(motion.div)`
	w-full
	h-full
	bg-[rgba(0,_0,_0,_0.8)]
	top-0
	left-0
	fixed
	flex
	justify-center
	items-center
	z-[99];
	mt-[18px]
`;

export const ModalWrapper = tw(motion.div)`
	w-[90vw]
    h-[60vh]
    md:w-[50vw]
	md:h-[55vh]
    xl:w-[25vw]
	xl:h-[75vh]
	shadow-[0_5px_16px_rgba(0,_0,_0,_0.2)]
	bg-white
	text-black
	flex
	relative
	overflow-none
	rounded-[10px]
	z-[100]
`;

export const CloseModalButton = tw(MdClose)`
	cursor-pointer
	absolute
	top-[20px]
	right-[20px]
	w-[32px]
	h-[32px]
	p-0
	z-[10]
`;