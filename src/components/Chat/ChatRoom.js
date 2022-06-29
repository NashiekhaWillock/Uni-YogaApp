import { auth, db, storage } from '../../fb'
import 'firebase/firestore'
import { collection, onSnapshot, query, where, orderBy, getDocs } from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import { getAllMessages } from '../../utils/fetchData';
import Spinner from '../Misc/Spinner';
import { useUserAuth } from '../../context/userAuthContext';
import DataService from "../../hooks/useDataServices"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import ChatForm from './ChatForm';
import Message from './Message';
import User from './User.js';
import { ChatRoomContainer, Messages, MessagesContainer, UsersContainer } from './ChatStyles';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoSrc, setPhotoSrc] = useState('');
  const dummy = useRef();
  const { currentUser } = useUserAuth()
  const { uid, photoURL } = currentUser

  useEffect(() => {
    const msgsRef = collection(db, "messages");
    const q = query(msgsRef, orderBy('createdAt'))
    setLoading(true);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log('Getting messages')
      let msgs = [];
      querySnapshot.forEach(doc => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setMessages(msgs);
    });
    setLoading(false);
    return () => {
      console.log('Unsubscribing')
      unsubscribe();
    }
  }, []);


/*   useEffect(() => {
    const msgsRef = collection(db, "messages");
    const q = query(msgsRef, orderBy('createdAt'))
    setLoading(true);
    getDocs(q).then((snapshot) => {
      console.log('Getting messages')
      let msgs = [];
      snapshot.forEach(doc => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setMessages(msgs);
    });
    setLoading(false);
    return () => {
      console.log('Unsubscribing')
    
    }
  }, []); */

  useEffect(() => {
    const usersRef = collection(db, "users");
    // create query object
    const q = query(usersRef, where("userID", "not-in", [auth.currentUser.uid]));
    // execute query
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach(doc => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUsers(users);
      localStorage.setItem("user count", users.length)
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url;
    const value = text.trim()

    if (photo) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${photo.name}`
      );
      const snap = await uploadBytes(imgRef, photo);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
    }

    setPhoto(url)
    if (value.length > 0 || url) {
      await DataService.addMessages({
        text: text,
        createdAt: new Date(),
        uid,
        photoURL,
        media: url || "",
      });
    }
    setText('')
    setPhoto('')
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (

    <ChatRoomContainer>
      <UsersContainer>
        {users.map((user) => (
          <User
            key={user.userID}
            user={user}
          />
        ))}
      </UsersContainer>
      <MessagesContainer>
        <Messages>
          {messages.length
            ? messages.map((msg, i) => (
              <Message key={i} msg={msg} />
            ))
            : null}

        </Messages>
        <span ref={dummy}></span>
      </MessagesContainer>
      <ChatForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        text={text}
        photoSrc={photoSrc}
        setText={setText}
        setPhoto={setPhoto}
      />
    </ChatRoomContainer>

  )
}

export default Chat