
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function Edge({ edge, toggleComplete, handleDelete, handleEdit,}) {
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
    <div className="edge">
      <input
        style={{ textDecoration: edge.completed && "line-through" }}
        type="text"
        value={edge.title === "" ? newTitle : edge.title}
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(edge)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(edge, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="text-white" onClick={() => handleDelete(edge.id)}>
          <DeleteIcon id="i" style={{ color: "#fff" }} />
        </button>
      </div>
    </div>
  );
}