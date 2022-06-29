import { Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useForm } from "../../screens";
import TextInput from '../../components/UpdateForm/TextInput'
const EdgeForm = ({ firstFieldRef, onCancel }) => {

    const { handleEdge, handleEdgeChange, edgeValue } = useForm(
    );
    return (
        <Stack spacing={4} className='h-80 w-80 flex m-auto items-center justify-center'>
            <div className='text-2xl pb-5'>What is your Edge?</div>
            <TextInput
                label='Edge'
                name='edge'
                ref={firstFieldRef}
                value={edgeValue.edge}
                onChange={handleEdgeChange}
                placeholder="Enter..."
            />

            <ButtonGroup d='flex' justifyContent='flex-end' className='pt-4'>
                <Button className='text-lg' variant='outline' onClick={onCancel} >
                    Cancel
                </Button>
                <Button className="text-lg" colorScheme='teal' onClick={handleEdge}>
                    Save
                </Button>
            </ButtonGroup>
        </Stack>
    )
}

export default EdgeForm;