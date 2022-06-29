import tw from 'tailwind-styled-components'

export const AdminNav =  tw.nav`
bg-purple-900 flex justify-between items-center border-b-2 border-gray-800 p-4 font-semibold text-white 
`

export const NavH1 =  tw.h1`
text-xl md:text-2xl m-auto md:m-0 font-extrabold shadow-lime-600 shadow-md
`

export const AdminContainer =  tw.div`
grid grid-cols-1 xl:grid-cols-[300px_minmax(900px,_1fr)_100px] h-screen

`

export const SidePanel = tw.div`
p-2 mx-6 xl:border-r-2 xl:border-purple-900 flex justify-center
`

export const ButtonContainer =  tw.div`
bg-purple-900 text-center mt-4 rounded-md hover:bg-purple-700

`

export const FormContainer =  tw.form`
w-full max-w-lg p-2 pb-4 pt-4 

`

export const InputContainer =  tw.div`
flex flex-wrap -mx-3 mb-6

`
export const StyledLabel =  tw.label`
block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2


`
export const StyledInput =  tw.input`
appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-900



`

export const NavUl =  tw.ul`
flex space-x-3

`

