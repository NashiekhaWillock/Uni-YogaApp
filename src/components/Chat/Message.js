import { useUserAuth } from '../../context/userAuthContext';
const Message = ({ msg }) => {

    const { currentUser } = useUserAuth();
    const messageClass = msg.uid === currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass} mb-2`}>
            <img src={msg.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} className=" w-[40px] h-[40px] rounded-[50%] m-[2px_5px]" alt={currentUser.displayName}/> 
          
            <p className="msg-p normal-case">{msg.media ? <img src={msg.media} alt={msg.text} /> : null}
                {msg.text}
                </p>
             
        </div>
    );
};

export default Message;