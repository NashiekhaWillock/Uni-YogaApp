import React, { useEffect, useRef, useState } from 'react'
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Text,
    Image,
    Slider,
    SliderTrack,
    SliderThumb,
    SliderFilledTrack,
    Button
} from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';
import screenfull from "screenfull";
import { IoPause, IoPlay } from "react-icons/io5";
import Platform from 'react-platform-js'
import {
    MdForward10,
    MdFullscreen,
    MdOutlineReplay10,
    MdVolumeOff,
    MdVolumeUp,
    MdGraphicEq,
} from "react-icons/md";
import ReactPlayer from "react-player";
import logo from "../../assets/GLogo.png";
import { db } from '../../fb';
import { useParams } from 'react-router-dom';
import { getSpecificVideo } from '../../utils/fetchData';
import { BottomNav, DesktopAppBar, MobileAppBar } from '../index';
import { useUserAuth } from '../../context/userAuthContext';
import { BrowserView, MobileView } from 'react-device-detect';
import Modal from '../modal/Modal';



const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0);
    const [volume2, setVolume2] = useState(0.5);
    const [played2, setPlayed2] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [seeking2, setSeeking2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [videoInfo, setVideoInfo] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const { videoId } = useParams();
    const { userID, orientation } = useUserAuth();
    const points = useState([]);

    useEffect(() => {
        if (videoId) {
            setIsLoading(true);
            getSpecificVideo(db, videoId).then((data) => {
                setVideoInfo(data);
                localStorage.setItem("videoID", data.id)
                localStorage.setItem("videoTitle", data.title)
                localStorage.setItem("videoCategory", data.category)
                setIsLoading(false);
            });

        }
    }, [videoId]);

  

    // Modal
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        if (!showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        setShowModal(!showModal);
    };

    const { inView } = useInView({
        rootMargin: '-100px',
    });

    // Custom reference
    const playerRef = useRef();
    const playerRef2 = useRef();
    const playerContainer = useRef();
    const playerContainer2 = useRef();
    const format = (seconds) => {
        if (isNaN(seconds)) {
            return "00:00";
        }

        const date = new Date(seconds * 1000);
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes();
        const ss = date.getUTCSeconds().toString().padStart(2, "0");

        if (hh) {
            return `${hh}:${mm.toString().padStart(2, "0")} : ${ss}`;
            // 01:02:32
        }

        return `${mm}:${ss}`;
        // 02:35
    };
    useEffect(() => { }, [muted, volume, played, played2]);

    const onvolumechange = (e) => {
        setVolume(parseFloat(e / 100));
        console.log(volume)
        e === 0 ? setMuted(true) : setMuted(false);

    };

    const handleFastRewind = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    };
    const handleFastRewind2 = () => {
        playerRef2.current.seekTo(playerRef2.current.getCurrentTime() - 10);
    };
    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    };
    const handleFastForward2 = () => {
        playerRef2.current.seekTo(playerRef2.current.getCurrentTime() + 10);
    };

    const handleProgress = (changeState) => {
        if (!seeking) {
            setPlayed(parseFloat(changeState.played / 100) * 100);
        }
    };

    const handleProgress2 = (changeState) => {
        if (!seeking2) {
            setPlayed2(parseFloat(changeState.played / 100) * 100);
        }
    };

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e / 100));
    };
    const handleSeekChange2 = (e) => {
        setPlayed2(parseFloat(e / 100));
    };
    const onSeekMouseDown = (e) => {
        setSeeking(true);
    };
    const onSeekMouseDown2 = (e) => {
        setSeeking2(true);
    };

    const onSeekMouseUp = (e) => {
        setSeeking(false);
        playerRef.current.seekTo(e / 100);
    };

    const onSeekMouseUp2 = (e) => {
        setSeeking2(false);
        playerRef2.current.seekTo(e / 100);
    };

    const currentTime = playerRef.current
        ? playerRef.current.getCurrentTime()
        : "00:00";

    const currentTime2 = playerRef2.current
        ? playerRef2.current.getCurrentTime()
        : "00:00";

    const duration = playerRef.current
        ? playerRef.current.getDuration()
        : "00:00";
    const duration2 = playerRef2.current
        ? playerRef2.current.getDuration()
        : "00:00";

    const elapsedTime = format(currentTime);
    const elapsedTime2 = format(currentTime2);
    const totalDuration = format(duration);
    const totalDuration2 = format(duration2);

    return (
        <>
           {!isPlaying ? <MobileAppBar /> : null}
            <div className="bg-white dark:bg-slate-600 h-full pt-40 pb-32 md:pb-20 min-h-screen">
                
                <div className="text-black dark:text-white text-2xl md:text-3xl pb-10 text-center">{videoInfo?.title}</div>
                {/* Main Grid for video */}
                <div className={`${videoInfo?.tkUrl && videoInfo?.wkUrl ? " md:portrait:grid-cols-2 xl:grid-cols-2":"xl:w-[70vw]"}  grid grid-cols-1 w-full m-auto items-center gap-6 p-2 md:p-4 landscape:p-16 md:landscape:p-16 lg:landscape:p-4 `}>
                {videoInfo?.tkUrl && (
                    <div>
                    
                        <div className="text-black dark:text-white text-xl md:text-2xl pb-5 text-center">Talk Through</div>
                        <Flex
                            width={"full"}
                            bg="black"
                            position="relative"
                            ref={playerContainer}
                            className="border-8 rounded-md border-zinc-900 h-[350px]"

                        >
                           
                            <ReactPlayer
                                ref={playerRef}
                                url={videoInfo?.tkUrl}
                                // url={'https://www.youtube.com/watch?v=BFaXfQpxnps'}
                                playing={isPlaying}
                                muted={muted}
                                volume={volume}
                                onProgress={handleProgress}
                                width="100%"
                                height="100%"
                          className="w-screen"

                            />

                            
                            {/* Controls for video Player */}
                            <Flex
                                position={"absolute"}
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                direction="column"
                                justifyContent={"space-between"}
                                alignItems="center"
                                zIndex={1}
                                cursor="pointer"
                                className=""
                            >
                                {/* play icon */}
                                <Flex
                                    alignItems={"center"}
                                    justifyContent="center"
                                    onClick={() => {
                                        setIsPlaying(!isPlaying);
                                    }}
                                    width="full"
                                    height="full"
                                >
                                    {!isPlaying && (
                                        <IoPlay fontSize={60} color="#f2f2f2" cursor={"pointer"} />
                                    )}
                                </Flex>

                                {/* Progress Controls */}
                                <div
                                    className=" bg-gradient-to-t from-blackAlpha-500 to-blackAlpha-50 via-blackAlpha-900 w-full"
                                >

                                    <Slider
                                        aria-label="slider-ex-4"
                                        min={0}
                                        max={100}
                                        value={played * 100}
                                        transition="ease-in-out"
                                        transitionDuration={"0.2"}
                                        onChange={handleSeekChange}
                                        onMouseDown={onSeekMouseDown}
                                        onChangeEnd={onSeekMouseUp}
                                        ml={10}
                                        className="mb-2 flex m-auto items-center justify-center"
                                    >
                                        <SliderTrack className="p-[0.1rem] w-full bg-white">
                                            <SliderFilledTrack className=" bg-teal p-[0.1rem] " />
                                        </SliderTrack>
                                        <SliderThumb boxSize={15} >
                                            <Box color='tomato' as={MdGraphicEq} className=" m-auto bg-white rounded-full " />
                                        </SliderThumb>
                                    </Slider>

                                    {/* Other player Controls */}
                                    <Flex width={"full"} alignItems="center" my={2} >
                                        <MdOutlineReplay10
                                            fontSize={30}
                                            color={"#f1f1f1"}
                                            cursor="pointer"
                                            onClick={handleFastRewind}
                                        />

                                        <Box onClick={() => setIsPlaying(!isPlaying)}>
                                            {!isPlaying ? (
                                                <IoPlay
                                                    fontSize={30}
                                                    color="#f2f2f2"
                                                    cursor={"pointer"}
                                                />
                                            ) : (
                                                <IoPause
                                                    fontSize={30}
                                                    color="#f2f2f2"
                                                    cursor={"pointer"}
                                                />
                                            )}
                                        </Box>

                                        <MdForward10
                                            fontSize={30}
                                            color={"#f1f1f1"}
                                            cursor="pointer"
                                            onClick={handleFastForward}
                                        />

                                        {/* Volume Controls */}
                                        <Flex alignItems={"center"}>
                                            <Box onClick={() => setMuted(!muted)}>
                                                {!muted ? (
                                                    <MdVolumeUp
                                                        fontSize={30}
                                                        color="#f1f1f1"
                                                        cursor="pointer"
                                                    />
                                                ) : (
                                                    <MdVolumeOff
                                                        fontSize={30}
                                                        color="#f1f1f1"
                                                        cursor="pointer"
                                                    />
                                                )}
                                            </Box>
                                            <Slider
                                                aria-label="slider-ex-2"
                                                defaultValue={volume * 100}
                                                min={0}
                                                max={100}
                                                mx={2}
                                                marginRight={10}
                                                onChangeStart={onvolumechange}
                                                onChangeEnd={onvolumechange}
                                                className="flex w-10 m-auto items-center"
                                            >
                                                <SliderTrack className="bg-white p-[0.1rem]    ">
                                                    <SliderFilledTrack className="bg-teal w-10 p-[0.1rem]" />
                                                </SliderTrack>
                                                <SliderThumb boxSize={8} className="bg-white rounded-full " />
                                            </Slider>

                                        </Flex>

                                        {/* duration of video */}
                                        <Flex alignItems={"center"} gap={2}>

                                            <Text fontSize={16} color="whitesmoke">
                                                {elapsedTime}
                                            </Text>
                                            <Text fontSize={16} color="whitesmoke">
                                                /
                                            </Text>
                                            <Text fontSize={16} color="whitesmoke">
                                                {totalDuration}
                                            </Text>
                                        </Flex>

                                        <Image src={logo}  ml="auto" className="w-20 xl:w-28 shadow-sm w-full shadow-lime-400" />
                                        <MdFullscreen
                                            fontSize={30}
                                            color="#f1f1f1"
                                            cursor={"pointer"}
                                            onClick={() => {
                                                screenfull.toggle(playerContainer.current);
                                            }}
                                        />
                                    </Flex>
                                </div>
                            </Flex>
                            
                        </Flex>

                        {/* Video Description */}
                        {videoInfo?.description && (
                            <Flex my={6} direction="column" className="text-black dark:text-white p-2">
                                <Text my={2} fontSize={20} fontWeight="semibold" >
                                    Description
                                </Text>
                                {videoInfo?.description}
                            </Flex>
                        )}
                    </div>)}
                    {videoInfo?.wkUrl && (
                    <div>
                        <div className="text-black dark:text-white text-xl md:text-2xl pb-5 text-center">Walk Through</div>
                        <Flex
                            width={"full"}
                            bg="black"
                            position="relative"
                            ref={playerContainer2}
                            className="border-8 rounded-md border-zinc-900 h-[350px]"
                        >
                            <ReactPlayer
                                ref={playerRef2}
                                url={videoInfo?.wkUrl}
                                playing={isPlaying2}
                                muted={muted}
                                volume={volume}
                                onProgress={handleProgress2}
                                width="100%"
                                height="100%"
                            />


                            {/* Controls for video Player */}
                            <Flex
                                position={"absolute"}
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                direction="column"
                                justifyContent={"space-between"}
                                alignItems="center"
                                zIndex={1}
                                cursor="pointer"
                            >
                                {/* play icon */}
                                <Flex
                                    alignItems={"center"}
                                    justifyContent="center"
                                    onClick={() => {
                                        setIsPlaying2(!isPlaying2);
                                    }}
                                    width="full"
                                    height="full"
                                >
                                    {!isPlaying2 && (
                                        <IoPlay fontSize={60} color="#f2f2f2" cursor={"pointer"} />
                                    )}
                                </Flex>

                                {/* Progress Controls */}
                                <div className=" bg-gradient-to-t from-blackAlpha-500 to-blackAlpha-50 via-blackAlpha-900 w-full items-center">

                                    <Slider
                                        aria-label="slider-ex-4"
                                        min={0}
                                        max={100}
                                        value={played2 * 100}
                                        transition="ease-in-out"
                                        transitionDuration={"0.2"}
                                        onChange={handleSeekChange2}
                                        onMouseDown={onSeekMouseDown2}
                                        onChangeEnd={onSeekMouseUp2}
                                        ml={10}
                                        className="mb-2 flex m-auto items-center justify-center"
                                    >
                                        <SliderTrack className="p-[0.1rem] w-full bg-white">
                                            <SliderFilledTrack className=" bg-teal p-[0.1rem] " />
                                        </SliderTrack>
                                        <SliderThumb boxSize={15} >
                                            <Box color='tomato' as={MdGraphicEq} className=" m-auto bg-white rounded-full " />
                                        </SliderThumb>
                                    </Slider>

                                    {/* Other player Controls */}
                                    <Flex width={"full"} alignItems="center" my={2} >
                                        <MdOutlineReplay10
                                            fontSize={30}
                                            color={"#f1f1f1"}
                                            cursor="pointer"
                                            onClick={handleFastRewind2}
                                        />

                                        <Box onClick={() => setIsPlaying2(!isPlaying2)}>
                                            {!isPlaying2 ? (
                                                <IoPlay
                                                    fontSize={30}
                                                    color="#f2f2f2"
                                                    cursor={"pointer"}
                                                />
                                            ) : (
                                                <IoPause
                                                    fontSize={30}
                                                    color="#f2f2f2"
                                                    cursor={"pointer"}
                                                />
                                            )}
                                        </Box>

                                        <MdForward10
                                            fontSize={30}
                                            color={"#f1f1f1"}
                                            cursor="pointer"
                                            onClick={handleFastForward2}
                                        />

                                        {/* Volume Controls */}
                                        <Flex alignItems={"center"}>
                                            <Box onClick={() => setMuted(!muted)}>
                                                {!muted ? (
                                                    <MdVolumeUp
                                                        fontSize={30}
                                                        color="#f1f1f1"
                                                        cursor="pointer"
                                                    />
                                                ) : (
                                                    <MdVolumeOff
                                                        fontSize={30}
                                                        color="#f1f1f1"
                                                        cursor="pointer"
                                                    />
                                                )}
                                            </Box>
                                            <Slider
                                                aria-label="slider-ex-2"
                                                defaultValue={volume * 100}
                                                min={0}
                                                max={100}
                                                mx={2}
                                                marginRight={10}
                                                onChangeStart={onvolumechange}
                                                onChangeEnd={onvolumechange}
                                                className="flex w-10 m-auto items-center"
                                            >
                                                <SliderTrack className="bg-white p-[0.1rem]    ">
                                                    <SliderFilledTrack className="bg-teal w-10 p-[0.1rem]" />
                                                </SliderTrack>
                                                <SliderThumb boxSize={8} className="bg-white rounded-full " />
                                            </Slider>

                                        </Flex>

                                        {/* duration of video */}
                                        <Flex alignItems={"center"} gap={2}>

                                            <Text fontSize={16} color="whitesmoke">
                                                {elapsedTime2}
                                            </Text>
                                            <Text fontSize={16} color="whitesmoke">
                                                /
                                            </Text>
                                            <Text fontSize={16} color="whitesmoke">
                                                {totalDuration2}
                                            </Text>
                                        </Flex>

                                        <Image src={logo} width={"120px"} ml="auto" />
                                        <MdFullscreen
                                            fontSize={30}
                                            color="#f1f1f1"
                                            cursor={"pointer"}
                                            onClick={() => {
                                                screenfull.toggle(playerContainer2.current);
                                            }}
                                        />
                                    </Flex>
                                </div>
                            </Flex>
                        </Flex>

                        {/* Video Description */}
                        {videoInfo?.description && (
                            <Flex my={6} direction="column" className="text-black dark:text-white p-2 ">
                                <Text my={2} fontSize={20} fontWeight="semibold" >
                                    Description
                                </Text>
                                {videoInfo?.description}
                            </Flex>
                        )}
                    </div>)}
                </div>
                <div className="Button">
                    <Button bg='teal' width='10rem' _hover={{ bg: 'white', color: 'black' }} display={"flex"} padding='.5rem' borderRadius='5rem' margin='auto' color="white" onClick={toggleModal} className={inView ? '' : 'corner'}>Log Your Session</Button>
                </div>
            </div>

            <Modal showModal={showModal} toggleModal={toggleModal} />
            {orientation ?
            <MobileView>
                
               <BottomNav />
            </MobileView> : null}
        </>
    )
}

export default VideoPlayer