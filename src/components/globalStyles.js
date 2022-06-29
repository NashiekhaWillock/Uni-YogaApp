import tw from "tailwind-styled-components";

export const Container = tw.div`
pt-20
z-[1]
w-full
max-w-screen-xl
mr-auto
ml-auto
pr-[50px]
pl-[50px]
md:pr-[30px]
md:pl-[30px]
`

export const Row = tw.div`
	flex
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
	${({ wrap }) => (wrap ? wrap : '')}
`;

export const Section = tw.section`
	${({ padding }) => (padding ? padding : 'p-[140px_0]')}
	${({ margin }) => (margin ? margin : '')}
	${({ inverse }) => (inverse ? 'bg-white' : 'bg-[#333333]')}
	${({ inverse }) => (inverse ? 'text-[#333333]' : 'text-white')}
	${({ position }) => (position ? position : '')}
	${({ width }) => (width ? width : 'w-auto')}
	${({ minWidth }) => (minWidth ? minWidth : 'min-w-auto')}
	${({ maxwidth }) => (maxwidth ? maxwidth : 'max-w-auto')}
	${({ height }) => (height ? height : 'h-auto')}
	${({ maxHeight }) => (maxHeight ? maxHeight : 'max-h-auto')}
	${({ minHeight }) => (minHeight ? minHeight : 'min-h-auto')}
	${({ smPadding }) => (smPadding ? smPadding : 'mobile:p-[70px_0]')}
`;