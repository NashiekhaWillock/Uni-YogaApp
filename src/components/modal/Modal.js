import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background, CloseModalButton, ModalWrapper } from './ModalStyles';
import { Button } from '@chakra-ui/react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { db } from '../../fb';
import { addDoc, collection } from 'firebase/firestore';
import { useUserAuth } from '../../context/userAuthContext';
import DataServices from '../../hooks/useDataServices';


const Modal = ({ showModal, toggleModal }) => {
	const [selectedDateTime, setSelectedDateTime] = useState(new Date());
	const [note, setNote] = useState("N/A");
	const [points, setPoints] = useState(1);
	const { userID } = useUserAuth();
	const videoName = localStorage.getItem("videoTitle")
	const videoID = localStorage.getItem("videoID")
	const modalRef = useRef();
	const newSessions = localStorage.getItem("videoTitle")
	const oldSessions = JSON.parse(localStorage.getItem("sessionLog"));
	const handleChange = e => {

		setNote(e.target.value);

	};
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			toggleModal();
		}
	};

	const backgroundVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
	};

	const modalVariants = {
		initial: {
			opacity: 0,
			y: 200,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				type: 'spring',
				stiffness: 100,
			},
		},

		exit: {
			y: -200,
			opacity: 0,
		},
	};
	useEffect(() => {
		const localPoints = localStorage.getItem("points")
		if (localStorage.getItem("sessionLog") == null) {
			localStorage.setItem("sessionLog", '[]')
		}

		if (localPoints) {
			setPoints(parseInt(localStorage.getItem("points")) + 1)
		}
	}, [])

	const handleSession = async (e) => {
		setNote("");
		if (!oldSessions.includes(newSessions)) {
			setPoints(points + 1)
			localStorage.setItem('points', JSON.stringify(points))
			DataServices.updatePoints(userID, { pointsEarned: points })
			oldSessions.push(newSessions)
			localStorage.setItem('sessionLog', JSON.stringify(oldSessions))
			DataServices.updatePoints(userID, { SessionsCompleted: oldSessions })
		}

		await addDoc(collection(db, `users/${userID}/sessions`), {
			sessionID: videoID,
			sessionName: videoName,
			note: note,
			CompletedOn: selectedDateTime,
		});

		toggleModal();
	};

	return (
		<AnimatePresence>
			{showModal && (
				<Background
					variants={backgroundVariants}
					animate="animate"
					initial="initial"
					onClick={closeModal}
					ref={modalRef}
					exit={{
						opacity: 0,
					}}
				>
					<ModalWrapper
						variants={modalVariants}
						animate="animate"
						initial="initial"
						exit={{
							opacity: 0,
							y: '-100vh'
						}}

					>
						<div className="flex flex-col w-full text-center mt-4">
							<div className="text-xl justify-center w-full mt-8 flex flex-row gap-4 items-center">

								<div>Date</div>
								<div className="flex items-center justify-center mb-4">
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<DateTimePicker
											renderInput={(props) => <TextField {...props} className="w-72" />}
											value={selectedDateTime}
											onChange={(newValue) => {
												setSelectedDateTime(newValue);
											}}

										/>
									</LocalizationProvider>
								</div>
							</div>

							<div className="text-xl text-left ml-20 mt-10">How was the session?</div>
							<input
								className="pl-4 ml-20 mr-20 mt-4 border-b-2 border-b-black outline-0 "
								placeholder="add a note"
								size="sm"
								onChange={handleChange}
							/>
							<Button onClick={handleSession} className="mt-20 p-2 rounded-md ml-40 text-xl text-yellow-400 mr-40 bg-slate-400 ">Save</Button>
						</div>

						<CloseModalButton aria-label="Close modal" onClick={toggleModal} />
					</ModalWrapper>
				</Background>
			)}
		</AnimatePresence>
	);
};

export default Modal;