import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, MenuItem, Toolbar } from '../../components'
import { useUserAuth } from '../../context/userAuthContext'
import { AdminContainer, AdminNav, NavH1, NavUl, SidePanel } from './AdminStyles'
import VideoAdminPanel from './VideoAdminPanel'

const Admin = () => {
  const { logOut, currentUser } = useUserAuth()
  const navigate = useNavigate();
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
  return (
    <>
      <AdminNav>
        <NavH1>Green Light Yoga - Admin</NavH1>
     
        <Container maxWidth="xl" >
        <Toolbar disableGutters className="justify-center">
        <Box sx={{ flexGrow: 1, justifyContent:'center', display: { xs:  'flex'},  gap: { xs: '1em' }, width: '100%', marginRight: '.2rem'}}>
            {menuItem.map(menuItem => {
              const { title, url } = menuItem;
              return (<MenuItem key={title} sx={{display:'flex', justifyContent: 'center', gap: { xs: '1em' }, fontSize: {xs:'1rem', md:'1.2rem'}, width:'100%', height:40, '&:hover': { cursor: "pointer", borderRadius: '10px', backgroundColor: 'purple' } }} onClick={() => {
                navigate(url);
              }}>{title}</MenuItem>)
            })}
          </Box>
          </Toolbar>
      </Container>
      
      </AdminNav>

      <AdminContainer>
        <SidePanel>
          <div className="Top Section">
            <div className="top-section flex space-x-4 mt-2 ">
              <img src={currentUser.photoURL} alt={"Avatar"} className="rounded-full w-10 h-10 " />
              <div>
                <h3 className="font-bold">{currentUser.displayName}</h3>
                <div className="flex space-x-2 items-center">
                  <p className="text-gray-400 font-semibold">{currentUser.email}</p>
                </div>
              </div>
            </div>
            <div className="buttons-section mt-5 space-y-2  w-52">
              <button className="bg-purple-900 hover:bg-purple-700 w-full border border-black text-gray-100 text-sm p-1 rounded" onClick={logOut}>
                Log Out
              </button>
            </div>
          </div>
        </SidePanel>
        <div className="  ">

          <div className="hero-section text-2xl border-b-2 border-b-purple-900 py-5 text-center flex flex-col justify-center ">
            Videos Control Panel
          </div>
          <VideoAdminPanel />
        </div>
      </AdminContainer>
    </>
  )
}

export default Admin