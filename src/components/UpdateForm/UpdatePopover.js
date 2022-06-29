import { useRef } from "react"
import FocusLock from "react-focus-lock"
import { EditIcon } from "@chakra-ui/icons"
import { Box, IconButton, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, useDisclosure } from "@chakra-ui/react"
import UpdateForm from "./UpdateForm"
import { useForm } from "../../screens"
import { useUserAuth } from "../../context/userAuthContext"

const UpdatePopover = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = useRef(null)
    const { currentUser } = useUserAuth()
    const { username, bio } = useForm();
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
                <Box className="flex text-xl text-white items-center justify-center m-auto text-center items w-full flex-col mt-2">
                <div className="flex m-auto w-full items-center justify-center">
                <div className=" text-xl text-white">{currentUser?.displayName ? currentUser.displayName : username}</div>          
                    <PopoverTrigger>
                        <IconButton size='sm' icon={<EditIcon />} className="ml-2" />
                    </PopoverTrigger>
                    </div>
                    <div className="text-center text-lg text-white m-2 ">{bio ? bio : JSON.parse(localStorage.getItem("userInfo")).bio}</div>
                </Box>
                <PopoverContent p={5} className="bg-white m-auto">
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <PopoverCloseButton className="float-right" />
                        <UpdateForm firstFieldRef={firstFieldRef} onCancel={onClose} onClick={onClose} onSubmit={onClose} />
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </>
    )
}
export default UpdatePopover;