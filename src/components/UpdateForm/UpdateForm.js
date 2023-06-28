import { Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useForm } from "../../screens";
import TextInput from './TextInput'
const UpdateForm = ({ firstFieldRef, onCancel }) => {

    const { handleUpdate, handleUpdateChange, updatedValues } = useForm(
    );
    return (
        <Stack spacing={4} className='h-80 w-80 flex m-auto items-center justify-center'>
            <div className='text-2xl pb-5'>Update Profile</div>
            <TextInput
                label='Username'
                name='username'
                ref={firstFieldRef}
                value={updatedValues.username}
                onChange={handleUpdateChange}
                placeholder="new username"
            />
            <TextInput label='Bio' name='bio'
                value={updatedValues.bio}
                onChange={handleUpdateChange} 
                placeholder="new bio"
                />
            <ButtonGroup d='flex' justifyContent='flex-end' className='pt-4'>
                <Button className='text-lg' variant='outline' onClick={onCancel} >
                    Cancel
                </Button>
                <Button className="text-lg" colorScheme='teal' onClick={handleUpdate}> 
                    Save
                </Button>
            </ButtonGroup>
        </Stack>
    )
}

export default UpdateForm;