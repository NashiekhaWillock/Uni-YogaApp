import { collection, doc, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';

// fetch all videos from firebase
export const getAllVideos = async (firestoreDB) => {
    const videos = await getDocs(
        query(collection(firestoreDB, 'videos'), orderBy('id', 'desc'))
    );
    return videos.docs.map(doc => doc.data());
    
};

// fetch all videos from firebase
export const getModerateVideos = async (firestoreDB) => {
  const moderate = await getDocs(
      query(collection(firestoreDB, 'moderate'), orderBy('id', 'desc'))
  );
  return moderate.docs.map(doc => doc.data());
};

// fetch the specific Video
export const getSpecificVideo = async (firestoreDB, videoId) => {
    const videoRef = doc(firestoreDB, "videos", videoId);
  
    const videoSnap = await getDoc(videoRef);
    if (videoSnap.exists()) {
      return videoSnap.data();
    } else {
      return "No Such Document";
    }
  };

  // fetch all the users Edges
export const getUserEdges = async (firestoreDB) => {
  const edges = await getDocs(
    query(collection(firestoreDB, 'edges'), orderBy('id', 'desc'))
);

return console.log(edges.docs.map(doc => doc.data()))
};

export const getAllBadges = async (firestoreDB) => {
  const badges = await getDocs(
    query(collection(firestoreDB, 'badges'), orderBy('badgeID', 'asc'))
);

return badges.docs.map((badges) => ({ ...badges.data(), id: badges.badgeName, points: badges?.pointsToUnlock }))
};
  

// fetch the specific Badge
export const getSpecificBadge= async (firestoreDB, badgeName) => {
  const badgeRef = doc(firestoreDB, "badges", badgeName);

  const badgeSnap = await getDoc(badgeRef);
  if (badgeSnap.exists()) {
    return badgeSnap.data();
  } else {
    return "No Such Document";
  }
};

  // fetch all the users Messages
  export const getAllMessages = async (firestoreDB) => {
    const messages = await getDocs(
      query(collection(firestoreDB, 'messages'), orderBy('createdAt'))
  );
  
  return messages.docs.map((doc) => doc.data())
  };