import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, LogoutIcon } from '../index'
import { useUserAuth } from "../../context/userAuthContext";
import { useNavigate } from "react-router";
import { logoSm, logoLg } from '../../assets/images'
import Logo from '../../svg/Logo';
import { useState } from 'react';
import UserSidebar from '../Misc/Sidebar';
import { Link } from 'react-router-dom';
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import useDarkMode from '../../hooks/useDarkMode';

const MobileAppBar = () => {

  const navigate = useNavigate();

  const [colorTheme, setTheme] = useDarkMode();
  const { currentUser } = useUserAuth()
  const menuItem = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Sessions',
      url: '/sessions'
    },
    {
      title: 'Community',
      url: '/community'
    },
    {
      title: 'Podium',
      url: '/podium'
    }, 
    {
      title: 'Profile',
      url: '/profile/edges'
    },
    {
      title: 'Admin',
      url: '/admin'
    }
  ]

  return (

    <AppBar position="static" sx={{ justifyContent:"center", backgroundColor: '#536B6F', display: 'flex', top: 0, position: 'fixed', zIndex: 2, paddingTop: { xs: 4, sm: 0, md: 0 }, paddingBottom: { xs: 1, sm: 0.5, md: 0 } }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters className="justify-center">
          <Link to='/home'>
            <Typography component="div" sx={{ width:"100%", display: "flex"}} >
            <div className="xl:w-2/4 text-5xl flex"><Logo /></div>
            </Typography>
          </Link>
     
          <Box sx={{ flexGrow: 1, justifyContent:'center', display: { xs: 'none', md: 'flex'}, width: '100%', marginRight: '1rem'}}>
            {menuItem.map(menuItem => {
              const { title, url } = menuItem;
              return (<MenuItem key={title} sx={{display:'flex', justifyContent: 'center', fontSize: '1.2rem', width:'100%', height:40, '&:hover': { cursor: "pointer", backgroundColor: '#5F8575', borderRadius: '10px' } }} onClick={() => {
                navigate(url);
              }}>{title}</MenuItem>)
            })}
          </Box>
          <div className="flex flex-row">
          <span onClick={() => setTheme(colorTheme)} className="cursor-pointer bg-white text-black dark:text-white dark:bg-gray-900 rounded-full flex m-auto" >
            {colorTheme === "light" ?
              <MdLightMode style={{padding:'.2rem', fontSize: '1.8rem'}} /> :
              <MdDarkMode style={{ padding:'.2rem', fontSize: '1.8rem' }} />
            }
          </span>
        <UserSidebar />
        </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MobileAppBar;
