import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Edge({ edge, toggleComplete, handleDelete, handleEdit, className}) {
  const [newTitle, setNewTitle] = useState(edge.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (edge.complete === true) {
      setNewTitle(edge.title);
    } else {
      edge.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <>
      <div className="flex mb-2 w-full m-auto p-2">
        <input
          style={{ textDecoration: edge.completed && "line-through" }}
          type="text"
          value={edge.title === "" ? newTitle : edge.title}
          className="pl-2 pr-2 text-black rounded-md w-full border-2 border-black"
          onChange={handleChange} />
        <div className="flex flex-row p-1 gap-2 m-auto items-center justify-center ml-2 ">
          <CheckCircleIcon sx={{ color: '#fff', cursor:'pointer' }} onClick={() => toggleComplete(edge)} />
          <EditIcon sx={{ color: '#fff', cursor:'pointer' }} onClick={() => handleEdit(edge, newTitle)} />
          <DeleteIcon sx={{ color: '#fff', cursor:'pointer' }} onClick={() => handleDelete(edge.id)} />
        </div>
      </div>

    </>
  );
}