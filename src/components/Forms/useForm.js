import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/userAuthContext';
import DataService from "../../hooks/useDataServices"
import { db } from '../../fb';
import { doc, onSnapshot } from 'firebase/firestore'
import { updateProfile } from "firebase/auth";
import { validateSignIn } from './Validation';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    fName: '',
    lName: '',
    email: '',
    password: '',
    bio: ''
  });

  const [updatedValues, setUpdatedValues] = useState({
    username: '',
    bio: ''
  });

  const [edgeValue, setEdgeValue] = useState({
    edge: ''
  });

  const initialSignInValues = {email: '', password: ''};

  const [signInValues, setSignInValues] = useState(initialSignInValues);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorsUpdate, setErrorsUpdate] = useState({});
  const [errorsSignIn, setErrorsSignIn] = useState({});
  const [errorsFBEmail, setFBEmailErrors] = useState("");
  const [errorsFBPassword, setFBPasswordErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [username, setUsername] = useState("Add A Username");
  const [user, setUser] = useState({});
  const [bio, setBio] = useState("Add A Bio")
  const [edge, setEdge] = useState("Add your edge")
  const { signUp, signIn, signInWithGoogle, signInWithFacebook, userID } = useUserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/home";
  const { currentUser } = useUserAuth();
  const [googleUser, setGoogleUser] = useState("");
  const [googleUid, setGoogleUid] = useState(false);
  const [facebookUser, setFacebookUser] = useState("");
  const [facebookUid, setFacebookUid] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // Signin form changes function
  const handleSignInChange = e => {
    const { name, value } = e.target;
    setSignInValues({
      ...signInValues,
      [name]: value
    });
  };

  const handleUpdateChange = e => {
    const { name, value } = e.target;
    setUpdatedValues({
      ...updatedValues,
      [name]: value
    });
  };
  const handleEdgeChange = e => {
    const { name, value } = e.target;
    setEdgeValue({
      ...edgeValue,
      [name]: value
    });
  };

  // Signup with email function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors(validate(values));
      if (Object.keys(validate(values)).length === 0) {
        setFBEmailErrors("")
        setFBPasswordErrors("")
        setUsername(values.username)
        await signUp(values.email, values.password);
        navigate(from, { replace: true });
        setIsSubmitting(true)
      }
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setFBEmailErrors(err.message)
          break;
        case "auth/weak-password":
          setFBPasswordErrors(err.message)
          break;
        default:
          break;
      }
    }
    setIsSubmitting(false)
  };

  // Signin with email function
  const SignIn = async (e) => {
    e.preventDefault();
    setErrorsSignIn(validateSignIn(signInValues))
    setLoading(false)
    try {
      if (Object.keys(validateSignIn(signInValues)).length === 0) {
      await signIn(signInValues.email, signInValues.password);
      navigate(from, { replace: true });
      setLoading(true)
      }
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          setFBEmailErrors("Email is invalid")
          break;
        case "auth/user-disabled":
          setFBEmailErrors("User account disabled.")
          break;
        case "auth/user-not-found":
          setFBEmailErrors("Email entered is not registered!")
          break;
        case "auth/wrong-password":
          setFBPasswordErrors("Password is invalid")
          break;
        default:
          break;
      }
    }
    setLoading(false)
  };


  // Google signin function
  const googleSignIn = async () => {
    setLoading(true)
    const { user } = await signInWithGoogle();
    const { refreshToken, providerData } = user;

    setGoogleUser(providerData[0])
    setGoogleUid(providerData[0]?.uid)

    localStorage.setItem("currentUser", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    navigate("/home", { replace: true });

    setLoading(false)
  }

  // Facebook signin function 
  const facebookSignIn = async () => {
    setLoading(true)
    const { user } = await signInWithFacebook();
    const { refreshToken, providerData } = user;

    setFacebookUser(providerData[0])
    setFacebookUid(providerData[0]?.uid)

    localStorage.setItem("currentUser", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    navigate("/home", { replace: true });

    setLoading(false)
  }

  // function for update profile on profile page
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (userID !== undefined && userID !== "") {
      if (updatedValues.bio.trim() !== "") {
        setBio(updatedValues.bio)
        await DataService.updateUser(userID, { bio: updatedValues.bio })
      }
      if (updatedValues.username.trim() !== "") {
        await updateProfile(currentUser, { displayName: updatedValues.username });
        await DataService.updateUser(userID, { username: updatedValues.username })
      }
    }
    setUpdatedValues({
      username: '',
      bio: ''
    })
  }

  //
  const handleEdge = async (e) => {
    e.preventDefault();

    if (userID !== undefined && userID !== "") {
      if (edgeValue.edge.trim() !== "") {
        setEdge(edgeValue.edge)
        await DataService.updateUser(userID, { edge: edgeValue.edge })
      }
    }
    setEdgeValue({
    edge:''
    })
  }

  //
  useEffect(() => {
    if (userID !== undefined) {
      const userRef = doc(db, "users", userID);
      const unsubscribe = onSnapshot(userRef, (snapshot) => {
        if (snapshot.data()?.bio !== undefined && snapshot.data()?.bio !== "") {
          setBio(snapshot.data().bio)
        } else {
          setBio("Add or edit bio using edit profile form.")
        }
        if (snapshot.data()?.username !== undefined && snapshot.data()?.username !== "") {
          setUsername(snapshot.data().username);
          updateProfile(currentUser, { displayName: snapshot.data().username });
        }
        if (snapshot.data()?.edge !== undefined && snapshot.data()?.edge !== "") {
          setEdge(snapshot.data().edge);
        }
        if (snapshot.data() !== undefined) {
          setUser(snapshot.data())
        }
      })

      return () => {
        unsubscribe()
      }
    }
  }, [currentUser, userID])

  useEffect(() => {
    const addGoogleUser = async () => {
      if (userID !== undefined && userID !== "" && userID !== null && googleUser !== "") {
        const userRef = doc(db, "users", userID);
        await DataService.addUser(userRef, googleUser)
        await DataService.updateUser(userID, { googleUid: googleUid })
        await DataService.updateUser(userID, { uid: userID })
        await DataService.updateUser(userID, { isOnline: true });
      }
    }

    return () => {
      addGoogleUser()
    }
  }, [googleUid, googleUser, signInWithGoogle, user, userID])


  useEffect(() => {
    const addFacebookUser = async () => {
      if (userID !== undefined && userID !== "" && userID !== null && facebookUser !== "") {
        const userRef = doc(db, "users", userID);

        await DataService.addUser(userRef, facebookUser)

        await DataService.updateUser(userID, { facebookUid: facebookUid })
        await DataService.updateUser(userID, { uid: userID })
        await DataService.updateUser(userID, { isOnline: true });
      }
    }

    return () => {
      addFacebookUser()
    }
  }, [facebookUid, facebookUser, userID])

  useEffect(() => {
    const addUser = async () => {
      const userRef = doc(db, "users", userID);
      if (values.email !== "" && values.fName !== "" && values.lName !== "") {
        const newUser = {
          "username": values.username,
          "email": values.email,
          "fullName": { "firstName": values.fName, "lastName": values.lName },
          "bio": values.bio
        }
        if (userID !== undefined && userID !== "" && userID !== null) {
          await DataService.addUser(userRef, newUser)
          updateProfile(currentUser, { displayName: values.username });
          await DataService.updateUser(userID, { isOnline: true });
          await DataService.updateUser(userID, { uid: userID })
        }
      }
    }

    return () => {
      if (userID !== undefined && userID !== "" && userID !== null) {
        addUser()
      }
    }
  }, [currentUser, userID, values.bio, values.email, values.fName, values.lName, values.username])


  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [callback, errors, isSubmitting]
  );
  useEffect(
    () => {
      if (Object.keys(errorsSignIn).length === 0 && loading) {
        callback();
      }
    },
    [callback, errorsSignIn, loading]
  );
 

  return { handleChange, handleUpdateChange, handleSignInChange, handleUpdate, handleSubmit, handleEdgeChange, handleEdge, SignIn, googleSignIn, facebookSignIn, loading, updatedValues, values, errors, errorsUpdate, errorsSignIn, errorsFBEmail, errorsFBPassword, signInValues, emailError, passwordError, isSubmitting, bio, edgeValue, edge, username };
};

export default useForm;