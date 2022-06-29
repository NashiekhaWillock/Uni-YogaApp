import { useState, Fragment } from 'react';
import { Box, IconButton, Avatar, Tooltip } from '../index'
import Drawer from '@mui/material/Drawer';
import { useUserAuth } from '../../context/userAuthContext';
import { useNavigate } from "react-router";
import { UpdateFormContainer, FormInput, StyledLabel } from '../Forms/Form.Styles';
import { useForm } from '../../screens';
import validate from '../Forms/Validation';
import useDataServices from '../../hooks/useDataServices';
import { InputContainer } from '../Forms/Form.Styles';

export default function UserSidebar() {

    const navigate = useNavigate();
    const { currentUser, logOut } = useUserAuth();
    const profileIcon = "/static/images/avatar/2.jpg"
    const {  handleUpdate, handleUpdateChange, updatedValues } = useForm(
        validate
    );

    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const handleLogOut = async () => {
        try {
            await logOut();
            await useDataServices.updateUser(currentUser?.uid, { isOnline: false })
            navigate("/signin");
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="ml-4"> 
            {['right'].map((anchor) => (
                <Fragment key={anchor}>
                    <Box sx={{ flexGrow: 0, }}>
                        <Tooltip title="Profile Settings" >
                            <IconButton sx={{ p: 0}} onClick={toggleDrawer(anchor, true)}>
                                <Avatar style={{ height: '43px', width: '43px', color: 'white', backgroundColor: '#5F9EA0' }} alt={currentUser?.displayName || currentUser?.email} src={currentUser?.photoURL} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <div className="flex flex-col w-[50vw] xl:w-[30vw] h-full font-mono bg-primary-green">
                            <button className="bg-gray-900 rounded-lg m-2 md:ml-20 md:mr-20 p-2 text-center text-lg xl:text-xl text-white font-mono font-bold mb-4 mt-16 uppercase" onClick={() => { navigate("/profile") }}>Visit Profile</button>
                            <div className="text-center text-lg  xl:text-xl text-white font-mono font-bold mb-4 mt-4">Edit Profile</div>
                            <UpdateFormContainer className="w-[180px] sm:w-[180px] md:w-[45vw]  xl:w-[370px] m-auto mb-0 mt-0" >

                                <InputContainer>
                                    <StyledLabel>Username</StyledLabel>
                                    <FormInput
                                        type='text'
                                        name='updatedUsername'
                                        placeholder='Username'
                                        value={updatedValues.updatedUsername}
                                        onChange={handleUpdateChange} 
                                        className="p-1 pl-3"/>
                                </InputContainer>
                                <InputContainer>
                                    <StyledLabel>Bio</StyledLabel>
                                    <FormInput
                                        type='text'
                                        name='updatedBio'
                                        placeholder='Bio'
                                        value={updatedValues.updatedBio}
                                        onChange={handleUpdateChange} 
                                        className="p-1 pl-3"
                                        max="150" />

                                </InputContainer>
                            </UpdateFormContainer>
                            <div className=" p-2 grid grid-cols-2 gap-4 w-full">
                                <button className="p-1 bg-form-green text-white border-2 justify-center items-center" onClick={handleUpdate}>Update</button>
                                <button className="p-1 bg-form-green text-white border-2 justify-center items-center" onClick={handleLogOut}>Logout</button>
                            </div>
                        </div>
                    </Drawer>
                </Fragment>
            ))}
        </div>
    );
}