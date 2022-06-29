import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styles.css';
import { useUserAuth } from '../../context/userAuthContext';
import Sidebar from '../Misc/Sidebar';
import { Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Container, Toolbar } from '../index';
import AppBar from '@mui/material/AppBar';



const Header = () => {
    return (
       
        <AppBar  position="static" sx={{ justifyContent:"space-between", display: 'flex', top: 0, position: 'fixed', zIndex: 2 }} >
          <>
        <Toolbar disableGutters className="justify-between h-full pt-4 w-screen  md:pt-0 md:pb-0 bg-stone-700  dark:bg-[#057381]">
        <header className="w-full p-2 h-full relative flex flex-row  mt-6 md:mt-0 justify-between box-border items-center">
            <NavLink to={'/home'} className=" dark:bg-black bg-amber-800 w-28 p-1 border-2 rounded-md text-white">
                <Button sx={{color: 'white', fontSize: '1rem', padding:'4px'}} className="" startIcon={<ArrowBack className="text-white" />}>
                    Back
                </Button>
            </NavLink>

            <div className="text-2xl xl:text-3xl text-orange-300 dark:text-white uppercase font-bol w-full flex item-center text-center justify-center m-auto">Web Chat</div>
            <Sidebar />
        </header>
        </Toolbar>
        </>
        </AppBar>
     
    )

}

export default Header