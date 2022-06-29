import React, { useEffect, useState } from 'react';
import { breathWork, sliderSettings, yogaSeq } from '../Carousel/CarouselData';
import { Row, Heading, Section } from '../../globalStyles';
import { VideoSlider, CarouselContainer, Card, ButtonContainer, Label } from './CarouselStyles';
import { getAllVideos, getModerateVideos } from '../../utils/fetchData';
import { db } from '../../fb'
import Spinner from '../Misc/Spinner';
import VideoPin from '../Sessions/VideoPin';
import { BsFillArrowLeftSquareFill as LeftArrow, BsFillArrowRightSquareFill as RightArrow } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { collection, onSnapshot } from 'firebase/firestore';
import { Offline, Online } from "react-detect-offline";



const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);
	const [sliderRef2, setSliderRef2] = useState(null);
	const [sliderRef3, setSliderRef3] = useState(null);
	const [videos, setVideos] = useState([]);
	const [moderate, setModerate] = useState([]);
	const [loading, setLoading] = useState(false);
	const [videoStorage, setVideoStorage] = localStorage.getItem("videos");
	const [mode, setMode] = useState('offline');

	useEffect(() => {
			const videosRef = collection(db, "videos");
			setLoading(true);
			const unsub = onSnapshot(videosRef, (snapshot) => {
				let videos = [];
				
				snapshot.forEach((doc) => {
					videos.push(doc.data());
				});			
					setVideos(videos);
					localStorage.setItem("videos", JSON.stringify(videos));
					setLoading(false);
			});
			return () => unsub();
	}, []);

	useEffect(() => {
		if(mode === "offline"){
			
			setVideos(JSON.parse(videoStorage));
			setLoading(false);
		}
	}, [mode, videoStorage])
	
	if (loading) return <Spinner msg={"Loading the sessions"}/>

	/* 	useEffect(() => {
			const modRef = collection(db, "breathwork");
			const unsub = onSnapshot(modRef, (snapshot) => {
				let mod = [];
				setLoading(true);
				snapshot.forEach((modDoc) => {
					mod.push(modDoc.data());
				});
				setModerate(mod);
				setLoading(false);
				
			});
			return (() => {
				unsub()
				if (loading) return <Spinner />
			})
		}, [loading]); */

	return (
		<>
			<Section maxwidth="max-w-[1280px]" padding="p-[50px_70px]">
				<Row justify="justify-between" wrap="flex-wrap">
					<Heading width="w-auto ">
						Yoga Sequence
					</Heading>

					<ButtonContainer>
						<IconContext.Provider value={{ size: '3rem', color: '#CBAADF' }} >
							<LeftArrow onClick={sliderRef?.slickPrev} className="m-4 md:mt-0 hover:opacity-70 transition-opacity cursor-pointer" />
							<RightArrow onClick={sliderRef?.slickNext} className="m-4 md:mt-0 hover:opacity-70 transition-opacity cursor-pointer" />
						</IconContext.Provider>
					</ButtonContainer>
				</Row>
				<Online>	<VideoSlider {...sliderSettings} ref={setSliderRef}>
					{
						videos && videos.map((data, i) => (

							<CarouselContainer key={i} >

								<Card>
									<Label className={`${data.color}`}>{data.level}</Label>
									<VideoPin key={i} data={data} />
								</Card>
							</CarouselContainer>
						))}</VideoSlider></Online>
								<VideoSlider {...sliderSettings} ref={setSliderRef}>
							{
								videoStorage && videoStorage.map((data, i) => (
		
									<CarouselContainer key={i} >
		
										<Card>
											<Label className={`${data.color}`}>{data.level}</Label>
											<VideoPin key={i} data={data} />
										</Card>
									</CarouselContainer>
								))}</VideoSlider>

			</Section>
			<Section maxwidth="max-w-[1280px]" padding="p-[50px_70px]" inverse="true" >
				<Row justify="justify-between" wrap="flex-wrap">
					<Heading width="w-auto ">
						Breath Work
					</Heading>
					<ButtonContainer>
						<IconContext.Provider value={{ size: '3rem', color: '#CBAADF' }} className="">
							<LeftArrow onClick={sliderRef2?.slickPrev} className="m-4 md:mt-0 hover:opacity-70 transition-opacity cursor-pointer" />
							<RightArrow onClick={sliderRef2?.slickNext} className="m-4 md:mt-0 hover:opacity-70 transition-opacity cursor-pointer" />
						</IconContext.Provider>
					</ButtonContainer>
				</Row>
				<VideoSlider {...sliderSettings} ref={setSliderRef2}>
					{
						videos && videos.map((data, i) => (
							<CarouselContainer key={i} >
								<Card>
									<Label className={`${data.color}`}>{data.sub}</Label>
									<VideoPin key={i} data={data} />
								</Card>
							</CarouselContainer>
						))}</VideoSlider>
			</Section>
			<Section maxwidth="max-w-[1280px]" padding="p-[50px_70px]" inverse="true" >
				<Row justify="justify-between" wrap="flex-wrap">
					<Heading width="w-auto ">
						Other How To's
					</Heading>
					<ButtonContainer>
						<IconContext.Provider value={{ size: '3rem', color: '#CBAADF' }} className="">
							<LeftArrow onClick={sliderRef3?.slickPrev} className="m-4 md:mt-0 hover:opacity-70 transition-opacity cursor-pointer" />
							<RightArrow onClick={sliderRef3?.slickNext} className="m-4 md:mt-0 hover:opacity-70 transition-opacity cursor-pointer" />
						</IconContext.Provider>
					</ButtonContainer>
				</Row>
				<VideoSlider {...sliderSettings} ref={setSliderRef3}>
					{
						videos && videos.map((data, i) => (
							<CarouselContainer key={i} >
								<Card>
									<Label className={`${data.color}`}>{data.sub}</Label>
									<VideoPin key={i} data={data} />
								</Card>
							</CarouselContainer>
						))}</VideoSlider>
			</Section>
		</>
	);
};

export default Carousel;