import { db } from "../fb";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");
const badgeCollectionRef = collection(db, "badges");
const edgeCollectionRef = collection(db, "edges");
const messageCollectionRef = collection(db, "messages");
const videoCollectionRef = collection(db, "videos");

class DataServices {
  
  addUsers = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  addUser = (userRef, newUser) => {
    return setDoc(userRef, newUser);
  }

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  updatePoints = (id, updatedPoints) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedPoints);
  };

  addBadges = (newBadge) => {
    return addDoc(badgeCollectionRef, newBadge);
  };

  updateBadge = (id, badge) => {
    const badgeDoc = doc(db, "badges", id);
    return updateDoc(badgeDoc, badge);
  };

  deleteBadge = (id) => {
    const badgeDoc = doc(db, "badges", id);
    return deleteDoc(badgeDoc);
  };

  getAllBadges = () => {
    return getDocs(badgeCollectionRef);
  };
  getBadge = (id) => {
    const badgeDoc = doc(db, "badges", id);
    return getDocs(badgeDoc);
  };

  addVideos = (newVideo) => {
    return addDoc(videoCollectionRef, newVideo);
  };

  updateVideo = (id, video) => {
    const videoDoc = doc(db, "videos", id);
    return updateDoc(videoDoc, video);
  };

  deleteVideo = (id) => {
    const videoDoc = doc(db, "videos", id);
    return deleteDoc(videoDoc);
  };

  getAllVideos = () => {
    return getDocs(videoCollectionRef);
  };

  getVideo = (id) => {
    const videoDoc = doc(db, "videos", id);
    return getDoc(videoDoc);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };

  getAllEdges = () => {
    return getDocs(edgeCollectionRef);
  };
  addEdge = (userRef, newUser) => {
    return setDoc(userRef, newUser);
  }
  addEdges = (newEdge) => {
    return addDoc(edgeCollectionRef, newEdge);
  }
  addMessages = (newMessage) => {
    return addDoc(messageCollectionRef, newMessage);
  }
}


export default new DataServices();