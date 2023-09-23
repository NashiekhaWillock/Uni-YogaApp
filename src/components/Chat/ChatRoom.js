import { auth, db, storage } from '../../fb';
import 'firebase/firestore';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useUserAuth } from '../../context/userAuthContext';
import DataService from "../../hooks/useDataServices";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ChatForm from './ChatForm';
import Message from './Message';
import User from './User.js';
import Spinner from '../Misc/Spinner';
import { ChatRoomContainer, Messages, MessagesContainer, UsersContainer } from './ChatStyles';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { currentUser } = useUserAuth();
  const { uid, photoURL } = currentUser;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'messages'), orderBy('createdAt')),
      (querySnapshot) => {
        console.log('Getting messages');
        const msgs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(msgs);
        setLoading(true);
      }
    );

    return () => {
      console.log('Unsubscribing');
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, 'users'),
      where('userID', '!=', currentUser.uid)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(users);
      localStorage.setItem('user count', users.length);
    });
    return () => unsubscribe();
  }, [currentUser.uid]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleImage = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const value = text.trim();
  
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
  
      try {
        const snapshot = await uploadBytesResumable(imgRef, img);
        const downloadURL = await getDownloadURL(snapshot.ref);
  
        // Combine text and image into a single message when an image is selected
        const combinedMessage = {
          text: value, // Text message
          createdAt: new Date(),
          uid: currentUser.uid,
          photoURL,
          img: downloadURL,
        };
  
        // Send the combined message
        await DataService.addMessages(combinedMessage);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else if (value.length > 0) {
      // If there's no image but there is a text message, send the text message
      await DataService.addMessages({
        text: value,
        createdAt: new Date(),
        uid,
        photoURL,
      });
    }
  
    setText('');
    setImg(null);
  };
  

  return (
    <ChatRoomContainer>
      <UsersContainer>
        {users.map((user) => (
          <User key={user.userID} user={user} />
        ))}
      </UsersContainer>
      <MessagesContainer>
        {loading ?
          <Messages>
            {messages.length > 0 ? (
              messages.map((msg) => <Message key={msg.id} msg={msg} />)
            ) : (<div className="text-white text-center text-[.9rem] md:text-xl p-2">{'Be the first to send a message!'} </div>)
            }
          </Messages>
          : (  
            <Spinner />
          )}
      </MessagesContainer>
      <ChatForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleImage={handleImage}
        text={text}
        setText={setText}
        setImg={setImg}
        img={img}
      />
    </ChatRoomContainer>
  );
};

export default Chat;