import { createContext, useContext, useEffect, useState } from "react";
import DataServices from "../hooks/useDataServices"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth, db, storage } from "../fb";
import { getAllBadges } from "../utils/fetchData";
import { collection, onSnapshot } from "firebase/firestore";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [allBadges, setAllBadges] = useState([]);
  const [points, setPoints] = useState([]);
  const badgePoints = allBadges.map(badge => { return badge.pointsToUnlock })
  const [orientation, setOrientation] = useState(true);
  let portrait = window.matchMedia("(orientation: portrait)");

portrait.addEventListener("change", function(e) {
    if(!e.matches) {
        setOrientation(false)
    }else{
      setOrientation(true)
    }
})

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function signInWithFacebook() {
    const provider = new FacebookAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  //Cleanup firebase function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('User Status Changed')
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user))
      setUserID(user?.uid)
      setUsername(user?.displayName)
      setLoading(false);
      if (user !== null && user !== undefined && user !== "") {
        await DataServices.updateUser(user?.uid, { uid: user?.uid });
        await DataServices.updateUser(user?.uid, { isOnline: true });
      }
    });

    return () => unsubscribe();

  }, []);

  // Get logged in user's data
  useEffect(() => {
    const getUser = async (id) => {
      try {
        const user = await DataServices.getUser(id);
        if (!user.exists()) {
          console.log(`Sorry, no such user found with id ${id}`);
        } else {
          console.log("Great, user has been found.");
          setUserInfo(user?.data());
          localStorage.setItem("userID", JSON.stringify(userID));
          localStorage.setItem("userInfo", JSON.stringify(user?.data()));
          setPoints(user?.data().pointsEarned)
          localStorage.setItem("pointsTotal", JSON.parseInt(user?.data().pointsEarned));
        }
      } catch (err) {

      }
    }
    if (currentUser) {
      getUser(userID)
    }
  }, [currentUser, userID]);


  // Load badges from firestore

  useEffect(() => {
    const badgesRef = collection(db, "badges");
    const unsub = onSnapshot(badgesRef, (querySnapshot) => {
      let badges = [];
      querySnapshot.forEach((doc) => {
        badges.push(doc.data());
      });
     
      setAllBadges(badges);
      localStorage.setItem("badges", JSON.stringify(badges))
      setLoading(false);
    });
    return (() => {
      unsub()
    })
  }, []);


// Upload/change profile photo
const upload = async (file, currentUser, setLoading) => {
  const fileRef = ref(storage, `profileImages/${userID} + '.png'`);
  setLoading(true);
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  DataServices.updateUser(userID, { photoURL: photoURL });
  await updateProfile(currentUser, { photoURL });
  setLoading(false);
}

const value = {
  currentUser,
  userID,
  username,
  points,
  allBadges,
  userInfo,
  loading,
  badgePoints,
  loader,
  orientation,
  setLoading,
  upload,
  signIn,
  signInWithGoogle,
  signInWithFacebook,
  signUp,
  logOut,
  resetPassword,
  updateEmail,
  updatePassword,
}

return (
  <userAuthContext.Provider
    value={value}
  >
    {!loading && children}
  </userAuthContext.Provider>
);
}

export function useUserAuth() {
  return useContext(userAuthContext);
}