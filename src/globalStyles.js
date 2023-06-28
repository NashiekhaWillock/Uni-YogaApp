import tw from 'tailwind-styled-components';

export const Container = tw.div`
z-[1]
w-full
h-full
max-w-[1300px]
mr-auto
ml-auto
pr-[10px]
pl-[10px]
xl:pr-[50px]
xl:pl-[50px]
min-h-full
`;

export const Heading = tw.h2`
text-2xl
xl:text-3xl
tracking-[0.4rem]
leading-[1.06em]
text-center
md:mb-6
m-auto
md:m-0
dark:text-white
text-black
${({ margin }) => (margin ? margin : '')};
${({ mb }) => (mb ? mb : '')};
${({ mt }) => (mt ? mt : '')};
${({ inverse }) => (inverse ? 'text-white' : 'text-black')};
${({ width }) => (width ? width : 'w-full')};
`;

export const Button = tw.button`
rounded-[4px]
${({primary}) => (primary ? 'bg-primary border-pink-300 hover:bg-[#5C4033]' : 'bg-[#5C4033] border-white hover:bg-[#CBAADF] hover:text-primary')}
whitespace-nowrap
p-[${(p) => (p.big ? 'p-[12px_64px]' : 'p-[10px_20px]')}]
text-white
text-[${({ fontbig }) => (fontbig ? 'text-[24px]' : 'text-[20px]')}]
outline-none
border-2
cursor-pointer
hover:transition-all
hover:duration-300 
hover:ease-out
hover:border-[#AD14FF]
mobile:portrait:w-full
p-[${(p) => (p.big ? 'landscape:p-[12px_34px]' : 'landscape:p-[2px_20px]')}]
text-[${(text) => (text.fontbig ? 'landscape:text-[18px]' : 'landscape:text-[24px]')}]
`;


export const Section = tw.section`

xl:p-[0px_50px] text-white w-auto min-w-auto h-auto max-h-auto min-h-auto mobile:p-[70px_0]
`;

export const Row = tw.div`
flex justify-between m-[1rem] min-w-auto max-w-auto h-auto max-h-auto min-h-auto flex-wrap
`;

export const Column = tw.div`
flex
flex-col
${({ justify }) => (justify ? justify : '')}
${({ align }) => (align ? align : '')}
${({ gap }) => (gap ? gap : '')}
${({ padding }) => (padding ? padding : '')}
${({ margin }) => (margin ? margin : '')}
${({ position }) => (position ? position : '')}
${({ width }) => (width ? width : 'w-auto')}
${({ minWidth }) => (minWidth ? minWidth : 'min-w-auto')}
${({ maxWidth }) => (maxWidth ? maxWidth : 'max-w-auto')}
${({ height }) => (height ? height : 'h-auto')}
${({ maxHeight }) => (maxHeight ? maxHeight : 'max-h-auto')}
${({ minHeight }) => (minHeight ? minHeight : 'min-h-auto')}
`;

