import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography, Container, MenuItem } from '../index'
import { useNavigate } from "react-router";
import { logoSm, logoLg } from '../../assets/images'
import UserSidebar from '../Misc/Sidebar';
import { Link } from 'react-router-dom';
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import useDarkMode from '../../hooks/useDarkMode';
import { useUserAuth } from '../../context/userAuthContext';
import useDataServices from '../../hooks/useDataServices';

const DesktopAppBar = () => {

  const navigate = useNavigate();
  const { currentUser, signOut } = useUserAuth();
  const [colorTheme, setTheme] = useDarkMode()
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
    }
  ]
  const handleSignOut = async () => {
    try {
        await signOut();
        await useDataServices.updateUser(currentUser?.uid, { isOnline: false })
        navigate("/signin");
    } catch (err) {
        console.log(err.message);
    }
};
  return (

    <AppBar position="static" sx={{ backgroundColor: '#536B6F', display: 'flex', top: 0, position: 'fixed', zIndex: 2, paddingTop: { xs: 4, sm: 0, md: 0 }, paddingBottom: { xs: 1, sm: 0.5, md: 0 } }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/home'>
            <Typography component="div" sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', xl: 'flex' } }} >
              <img src={logoLg} alt="logo" width="60%" />
            </Typography>
          </Link>
          <Link to='/home'>
            <Typography variant="title" noWrap sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' } }} >
              <img src={logoLg} alt="logo" width="80%" className='landscape:w-[60%]' />
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, justifyContent: 'space-evenly', width: '100%', marginRight: 20, display: 'flex' }}>
            {menuItem.map(menuItem => {
              const { title, url } = menuItem;
              return (<MenuItem key={title} sx={{ display: 'flex', fontSize: '1.2rem', '&:hover': { cursor: "pointer", backgroundColor: '#5F8575', borderRadius: '10px' } }} onClick={() => {
                navigate(url);
              }}>{title}</MenuItem>)
            })}
          </Box>
          <span onClick={() => setTheme(colorTheme)} className="cursor-pointer bg-white text-black dark:text-white dark:bg-gray-900 rounded-full flex" >
            {colorTheme === "light" ?
              <MdLightMode style={{ padding: '.2rem', fontSize: '1.8rem' }} /> :
              <MdDarkMode style={{ padding: '.2rem', fontSize: '1.8rem' }} />
            }
          </span>
          <button className="p-1 bg-form-green text-white border-2 justify-center items-center" onClick={handleSignOut}>Sign Out</button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default DesktopAppBar;
