import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup } from "react-bootstrap";
import DataService from "../../hooks/useDataServices";
import { ButtonContainer, FormContainer, InputContainer, StyledInput, StyledLabel } from "./AdminStyles";

const AddVideo = ({ id, setVideoId }) => {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [wkUrl, setWkUrl] = useState("");
  const [tkUrl, setTkUrl] = useState("");
  const [icon, setIcon] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  // Set level color and icon
  useEffect(() => {
    if (level === "heart") {
      setIcon("https://firebasestorage.googleapis.com/v0/b/fyp-yoga-app.appspot.com/o/levels%2Fheart_blk.png?alt=media&token=cb6934d0-3868-4972-a3f5-f8c5000ff027")
      setColor("bg-[red]")
    }
    if (level === "core") {
      setIcon("https://firebasestorage.googleapis.com/v0/b/fyp-yoga-app.appspot.com/o/levels%2Fcore.png?alt=media&token=8be11b65-e709-4687-bf62-0b7534e7145b")
      setColor("bg-[brown]")
    }
    if (level === "foundation") {
      setIcon("https://firebasestorage.googleapis.com/v0/b/fyp-yoga-app.appspot.com/o/levels%2Ffoundation.png?alt=media&token=14e65be8-5300-42b3-aa06-df7528dc8995")
      setColor("bg-[green]")
    }
    if (level === "vision") {
      setIcon("https://firebasestorage.googleapis.com/v0/b/fyp-yoga-app.appspot.com/o/levels%2Fvision.png?alt=media&token=16bf8c2d-a69e-481c-b7e4-2d8225dd92e3")
      setColor("bg-[purple]")
    }

  }, [level])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || level === "" || wkUrl === "" || tkUrl === "" || description === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }

    const newVideo = {
      title,
      level,
      description,
      tkUrl,
      wkUrl,
      icon,
      color,
    };
    console.log(newVideo);

    try {
      if (id !== undefined && id !== "") {
        await DataService.updateVideo(id, newVideo);
        setVideoId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await DataService.addVideos(newVideo);
        setMessage({ error: false, msg: "New Video added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setLevel("");
    setDescription("");
    setTkUrl("");
    setWkUrl("");
  };


  useEffect(() => {
    const editHandler = async () => {
      setMessage("");
      try {
        const docSnap = await DataService.getVideo(id);
        console.log("the session record is :", docSnap.data());
        setTitle(docSnap.data().title);
        setLevel(docSnap.data().level);
        setDescription(docSnap.data().description);
        setTkUrl(docSnap.data().tkUrl);
        setWkUrl(docSnap.data().wkUrl);
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }
    };
    //console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            dismissible
            onClose={() => setMessage("")}
            className={message?.error ? "text-red-600 pb-2" : " text-lime-700 pb-2"}
          >
            {message?.msg}
          </Alert>
        )}
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <StyledLabel htmlFor="session-title">
                Session Title
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Session Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <StyledLabel htmlFor="level">
                Level
              </StyledLabel>
              <StyledInput
                placeholder="enter a level, e.g. 'Core'"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
            </div>
          </InputContainer>
          <InputContainer>
            <div className="w-full px-3">
              <StyledLabel htmlFor="description">
                Description
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="enter a session description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>
          </InputContainer>
          <InputContainer>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <StyledLabel htmlFor="walk-thru-url">
                Walk Thru Url
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="enter a walk thru url"
                value={wkUrl}
                onChange={(e) => setWkUrl(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <StyledLabel htmlFor="talk-thru-url">
                Talk Thru URL
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="enter a talk thru url"
                value={tkUrl}
                onChange={(e) => setTkUrl(e.target.value)}
              />
            </div>
          </InputContainer>
          <ButtonContainer>
            <Button type="Submit" className="text-white" style={{ color: 'white', width: '100%' }}>
              Add/ Update
            </Button>
          </ButtonContainer>
        </FormContainer>

      </div>
    </>
  );
};

export default AddVideo;