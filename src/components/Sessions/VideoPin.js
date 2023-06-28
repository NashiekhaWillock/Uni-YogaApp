import { Flex  } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
  import {FaHeartbeat} from 'react-icons/fa'
  const VideoPin = ({ data }) => {
 
    return (
      <Link to={`/VideoDetail/${data?.id}`} className="h-full items-center md:flex justify-center m-auto">
   {/*    <Flex
        justifyContent={"space-between"}
        alignItems="center"
        direction={"column"}
        cursor="pointer"
        shadow={"lg"}
        _hover={{ shadow: "xl" }}
        rounded="md"
        overflow={"hidden"}
        position="relative"
        height="100%"
        width="100%"
      >
        
          <ReactPlayer
            url={data.url}
            muted
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
            height="100%"
            width="100%"
        
           
          />

        
        
     
        
      </Flex> */}

      <div className="flex grow flex-col pt-2 m-auto items-center justify-center">
      <img className=" w-9/12 md:w-3/5 mt-8 md:mb-4 md:mt-0" src={data.icon} alt={data.level}></img>
      <div className={`${data.color} bottom-0 absolute w-full m-auto text-xl xl:p-2 text-white mt-4 md:mt-6`}>{data.title}</div>
    
      </div>
      </Link>
    );
  };
  
  export default VideoPin;
  