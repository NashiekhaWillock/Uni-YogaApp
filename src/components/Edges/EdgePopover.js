import { useRef } from "react"
import FocusLock from "react-focus-lock"
import { EditIcon } from "@chakra-ui/icons"
import { Box, IconButton, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, useDisclosure } from "@chakra-ui/react"
import { useForm } from "../../screens"
import { useUserAuth } from "../../context/userAuthContext"
import Edge from './AddEdge'

const EdgePopover = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = useRef(null)
    const { currentUser } = useUserAuth()
    const { edge } = useForm();
    return (
        <>
            <Popover
                isOpen={isOpen}
                initialFocusRef={firstFieldRef}
                onOpen={onOpen}
                onClose={onClose}
                // placement='right'
                closeOnBlur={false}
            >
                <Box className="flex text-xl text-white items-center justify-center m-auto text-center items w-full flex-col mb-5 mt-2">
                <div className="flex m-auto w-full items-center justify-center">
                <div className=" text-xl text-black font-semibold dark:text-white">{edge ? edge : JSON.parse(localStorage.getItem("userInfo")).edge}</div>          
                    <PopoverTrigger>
                        <IconButton size='sm' icon={<EditIcon />} className="ml-2" />
                    </PopoverTrigger>
                    </div>
                   
                </Box>
                <PopoverContent p={5} className="bg-white m-auto rounded-2xl">
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <PopoverCloseButton className="float-right mr-4" />
                        <Edge firstFieldRef={firstFieldRef} onCancel={onClose} onClick={onClose}  />
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </>
    )
}
export default EdgePopover;