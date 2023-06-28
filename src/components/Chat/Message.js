import { useEffect, useRef } from 'react';
import { useUserAuth } from '../../context/userAuthContext';
const Message = ({ msg }) => {

    const { currentUser } = useUserAuth();
    const messageClass = msg.uid === currentUser.uid ? 'sent' : 'received';
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msg])

    return (
        <div className={`message ${messageClass} mb-2`}>
            <img src={msg?.photoURL ? msg?.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} className=" w-[40px] h-[40px] rounded-[50%] m-[2px_5px]" alt={currentUser.displayName}/> 
          
            <div>
                <p className="msg-p normal-case m-2">{msg.text}
                {msg.img && <img src={msg.img} alt =""/>}
                <span ref={ref}></span>
            </p>
                </div>
            
             
        </div>
    );
};

export default Message;