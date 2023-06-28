import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import DataService from "../../hooks/useDataServices";

const VideosList = ({ getVideoId }) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await DataService.getAllVideos();
        //console.log(data.docs);
        setVideos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await DataService.deleteVideo(id);
        getVideos();
    };
        return (
            <>
                 <div className=" bg-purple-900 w-36 ml-4 xl:ml-0 mt-2 mb-2 rounded-md hover:bg-purple-700">
                    <Button variant="outlined" onClick={getVideos} style={{color: 'white'}}>
                        Refresh List
                    </Button>
                </div>

           
                <Table className="m-2">
                    <thead>
                        <tr className="border"> 
                            <th className="border">#</th>
                            <th className="border">Session Title</th>
                            <th className="border">Level</th>
                            <th className="hidden md:table-cell">Description</th>
                            <th className="border">Action</th>            
                        </tr>
                    </thead>
                    <tbody>
                        {videos.map((doc, index) => {
                            return (
                                <tr key={doc.id} className="border">
                                    <td className="border">{index + 1}</td>
                                    <td className="border">{doc.title}</td>
                                    <td className="border">{doc.level}</td>
                                    <td className="flex-wrap border text-left pl-4 pr-4 hidden md:table-cell">{doc.description}</td>
                                    <td className="flex gap-2 h-20 pl-2 mb-2 m-auto justify-center items-center">
                                        <div className="bg-purple-900 rounded-md">
                                        <Button
                                            variant="outlined"
                                            className="edit"
                                            onClick={(e) => getVideoId(doc.id)}
                                            style={{color: 'white'}}
                                        >
                                            Edit
                                        </Button>
                                        </div>
                                        <div className="bg-purple-900 rounded-md text-white">
                                        <Button
                                            variant="outlined"
                                            className="delete"
                                            onClick={(e) => deleteHandler(doc.id)}
                                            style={{color: 'white'}}
                                        >
                                            Delete
                                        </Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </>
        )
    }


    export default VideosList