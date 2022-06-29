import React from 'react'
import { useUserAuth } from '../../context/userAuthContext'
import DataServices from '../../hooks/useDataServices'
import { AdminContainer, AdminNav, NavH1, NavUl, SidePanel } from './AdminStyles'
import VideoAdminPanel from './VideoAdminPanel'
import {useNavigate} from 'react-router-dom'

const Admin = () => {
  const { logOut, currentUser } = useUserAuth()
  const navigate = useNavigate()
  const handleLogOut = async () => {
    try {
        await logOut();
        await DataServices.updateUser(currentUser?.uid, { isOnline: false })
        navigate("/signin");
    } catch (err) {
        console.log(err.message);
    }
};
  return (
    <>
      <AdminNav>
        <NavH1>Green Light Yoga - Admin</NavH1>
        <NavUl >
       
        </NavUl>
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
              <button className="bg-purple-900 hover:bg-purple-700 w-full border border-black text-gray-100 text-sm p-1 rounded" onClick={handleLogOut}>
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