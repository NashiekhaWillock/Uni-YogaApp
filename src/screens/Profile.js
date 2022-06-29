import { useEffect } from 'react';
import { BottomNav, MobileAppBar } from '../components/index';
import { Tab, Tabs, Box, Avatar } from "@material-ui/core";
import { useState } from "react";
import { Badges, Edges } from '../components/index'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { useUserAuth, } from '../context/userAuthContext'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';
import { MobileView } from 'react-device-detect';
import UpdatePopover from '../components/UpdateForm/UpdatePopover';
import Camera from '../svg/Camera';

const Panel = (props) => (
  <main hidden={props.value !== props.index}>
    <div>{props.children}</div>
  </main>
);

const Profile = () => {

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState();
  const { currentUser, upload } = useUserAuth()
  const { page } = useParams()
  const navigate = useNavigate()

  const theme = createTheme({
    overrides: {
      MuiTabs: {
        indicator: {
          backgroundColor: "#fff"
        }
      },
      MuiTab: {
        "root": {
          "--tw-bg-opacity": 1,
          "backgroundColor": "rgb(55 65 81 / var(--tw-bg-opacity))",
          "&:hover": {
            "backgroundColor": "gray",
            "color": "#000"
          },
          "&$selected": {
            "color": "#fff",
            "backgroundColor": '#536B6F',
          }
        }
      }
    }
  });

  const tabNameToIndex = {
    0: "edges",
    1: "badges"
  };

  const indexToTabName = {
    "edges": 0,
    "badges": 1
  }

  const [index, setIndex] = useState(indexToTabName[page]);

  const onTabClicked = (event, index) => {
    navigate(`/profile/${tabNameToIndex[index]}`);
    setIndex(index);
  };

  const handleChange = (e) => {

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhotoURL(reader.result)
      } else (setPhotoURL(require("../assets/profile_wht.png")))
    }
    reader.readAsDataURL(e.target.files[0])

    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
    setLoading(true)
  }

  useEffect(() => {
    const handleClick = () => {
      if (loading === true) {
        upload(photo, currentUser, setLoading);
      }
    }
    handleClick()
  }, [currentUser, loading, photo, upload])

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  return (
    <>
  
      {/*    <BrowserView>
      <DesktopAppBar />
      </BrowserView> */}
      <MuiThemeProvider theme={theme}>
        <Box className="pt-28 pb-20 xl:pb-0 md:pt-16 landscape:pt-12 xl:pt-12 xl:mt-2 bg-gray-400 dark:bg-gray-800 ">
          <div className="items-center justify-center m-auto">

            <div className="img_container relative m-auto rounded-full w-[100px] h-[100px] mb-2 items-center justify-center border-4 border-primary-green dark:border-gray-400 mt-8" >
              <Avatar src={photoURL && photoURL } alt="Avatar" style={{ margin: "auto", width: "80px", height: "80px", top: "6.5%", left: "0.5%" }} className="hover:opacity-[0.4] cursor-pointer" />
              <div className="overlay transition ease-in-out duration-500 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <label htmlFor="photo">
                  <Camera />
                </label>
                <input type="file" name="photo" id="photo" className="hidden m-auto" onChange={handleChange} />
              </div>
              <label htmlFor="photo">
                <EditIcon sx={{ color: "white" }} className="absolute -right-2 bottom-0 rounded-full bg-primary-green dark:bg-slate-600 p-1 m-auto cursor-pointer" />
              </label>
            </div>
            <UpdatePopover />
          </div>
          <Tabs value={index} variant="fullWidth" onChange={onTabClicked} TabIndicatorProps={{ style: { display: "none" } }} >
            <Tab label={<span className="text-lg font-bold text-white uppercase">Edges</span>} />

            <Tab index={1} label={<span className="text-lg font-bold text-white uppercase">Badges</span>} />
          </Tabs>

          <Panel value={index} index={0} >
            {index === 0 && <Edges />}
          </Panel>

          <Panel value={index} index={1} >
            {index === 1 && <Badges />}
          </Panel>
        </Box>

      </MuiThemeProvider>
      <MobileView>
        <BottomNav />
      </MobileView>
    </>
  );
};

export default Profile;
