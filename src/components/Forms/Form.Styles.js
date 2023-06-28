import tw from "tailwind-styled-components";

export const LoginContainer = tw.form`
w-full
md:w-4/5
xl:w-3/4
shadow-[0 50px 70px -20px rgba(0, 0, 0, 0.8)]
p-4
rounded-xl
border-4
border-form-green
shadow-xl
shadow-form-green
pb-6
`

export const Subtitle = tw.p`
w-full
mb-[35px]
text-base
leading-[24px]
text-left
p-0
md:text-xl
md:mt-5
xl:text-xl
xl:mt-10
text-white
`
export const TextWrapper = tw.div`
w-full
pt-0
text-left
`
export const Row = tw.div`
flex
flex-wrap
justify-center
flex-[${({ imgStart }) => (imgStart ? 'flex-reverse' : 'flex-row')}]
`

export const TopLine = tw.div`
text-white
xl:text-5xl
text-3xl
md:text-3xl
md:mt-8
leading-[16px]
tracking-wider
mb-8
md:mb-6
font-bold
landscape:tabletLg:pt-4
landscape:tabletLg:text-2xl
`
export const Heading = tw.h1`
mb-4
text-xl
font-bold
leading-[1.1]
landscape:tabletLg:text-3xl
text-white
md:text-2xl
md:mt-2
xl:text-xl
xl:mt-2
`
export const Column= tw.div`
md:mb-[15px]
md:pr-[15px]
md:pl-[15px]
md:flex-1
md:max-w-[50%]
md:basis-[50%]
max-w-full
basis-full
landscape:sm:basis-[50%]
flex
justify-center
`
export const FormContainer = tw.form`
shadow-[0 50px 70px -20px rgba(0, 0, 0, 0.8)]
p-4
pb-4
rounded-xl
border-4
border-form-green
shadow-xl
shadow-form-green
w-full
xl:w-3/4

`
export const FormTitle = tw.h2`
text-lg
md:text-xl
xl:text-2xl
`
export const Section = tw.section`
flex
m-auto
items-center
h-full
p-[90px_0px]
min-h-screen
text-white
bg-[${({ lightBg }) => (lightBg ? 'bg-[#fff]' : 'bg-[#101522]')}]
`
export const NameContainer = tw.div`
flex gap-1
`
export const FormInput = tw.input`
w-full
outline-none
text-base
p-2
bg-[rgba(255, 255, 255, 0.1)]
text-black
tracking[1px]
rounded-lg 
border-2
border-amber-800
`

export const UpdateFormContainer = tw.form`

`
export const InputContainer = tw.div`
mb-2
mt-2
`
export const StyledSpan = tw.span`
bg-primary-green cursor-pointer rounded-md border-2 hover:bg-yellow-400 w-[40%] p-1 text-center m-auto
`

export const StyledPara = tw.p`
text-white
text-md
flex
items-center
landscape:sm:text-sm
landscape:sm:pl-0

`
export const Error = tw.p`
text-red-600
m-2
text-xs
md:text-base
xl:text-base
`

export const StyledLabel = tw.label`
block
text-white
mb-3
ml-0
text-base
leading-3
pt-2
`
export const ImgWrapper = tw.div`
  max-w-[500px]
  pb-[1rem]
  flex
  justify-[${({ start }) => (start ? 'start' : 'end')}]
`;

export const Img = tw.img`
  pr-0
  border-0
  max-w-full
  align-middle
  inline-block
  max-h-[400px]
`;

export const Button = tw.button`
rounded-md
w-full
mt-4
mb-6
bg-primary-green
whitespace-nowrap
p-2
text-white
text-xl
outline-none
border-2
border-white
cursor-pointer
hover:transition-all
hover:duration-300 
hover:ease-out
hover:border-yellow-700
sm:portrait:w-full
text-[${(text) => (text.fontbig ? 'landscape:text-[18px]' : 'landscape:text-[24px]')}]
`;
