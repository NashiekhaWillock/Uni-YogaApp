import tw from 'tailwind-styled-components';

export const ChatRoomContainer = tw.div`
relative 
grid 
grid-cols-[1.3fr_2fr] 
md:grid-cols-[2fr_3fr] 
xl:grid-cols-[1fr_3fr] 
h-[calc(100vh_-_55.7px)] 
w-screen
dark:bg-gray-800 
xl:pt-16
pt-24
md:pt-16
sm:landscape:pt-16
sm:landscape:mb-0
`

export const UsersContainer = tw.div`
bg-white 
dark:bg-black
border-r-4
border-r-yellow-600
dark:border-r-gray-400
overflow-y-auto
bg-gray-200
pt-2
sm:landscape:pl-10
md:landscape:pl-10
lg:landscape:pl-0
`

export const MessagesContainer = tw.main`
w-full
relative
overflow-y-auto
h-full
dark:bg-gray-800 
bg-zinc-700
pt-4
pb-16
`

export const Messages = tw.div`
mb-4
break-words

`

export const ChatFormContainer = tw.form`
h-[10vh] md:landscape:h-[20vh] lg:landscape:h-[10vh] sm:landscape:h-[15vh] fixed dark:border-t-2 bottom-0 xl:mb-0 dark:bg-black bg-[rgb(24_23,_23)] w-full flex text-lg rounded-bl-none 
`

export const ChatFormInput = tw.input`

`