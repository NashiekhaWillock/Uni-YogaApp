import React, { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";


const User = ({ user }) => {



  return (
    <>
      <div
        className={`user_wrapper bg-gray-700 dark:bg-[#057381] text-black ${user?.username && "selected_user"}`}
        
      >
        <div className="user_info">
        <div className="user_detail">
          <div className="relative">
            <img className="relative avatar" src={user?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="avatar"  />
            <div className={`w-3 h-3 ml-1 rounded-full absolute bottom-0 border-2 left-9 ${user.isOnline === true ? "bg-[#13b913]" : "bg-red-500"}`}></div>
            </div>
            <h4 className="text-white">{user?.username || user.fullName?.firstName[0] + user.fullName?.lastName[0] || user?.displayName[0]}</h4>
        </div>
       
      </div>
     </div>
    </>
  );
};

export default User;