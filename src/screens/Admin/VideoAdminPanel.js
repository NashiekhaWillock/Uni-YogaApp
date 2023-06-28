import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddVideo from "./AddVideo";
import VideosList from "./VideosList";
import "../../styles.css";

function VideoAdminPanel() {
  const [videoId, setVideoId] = useState("");

  const getVideoIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setVideoId(id);
  };
  return (
    <>

      <div className="flex m-auto items-center justify-center w-full md:w-[800px]">
        <Row className="w-full">
          <Col>
            <AddVideo id={videoId} setVideoId={setVideoId} />
          </Col>
        </Row>
      </div>
      <Container>
        <Row>
          <Col>
            <VideosList getVideoId={getVideoIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VideoAdminPanel;