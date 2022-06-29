import { useEffect, useRef, useState } from "react";
import { db } from "../../fb";
import { collection, addDoc } from "firebase/firestore";
import { useUserAuth } from '../../context/userAuthContext';

export default function AddSolution() {
  const [title, setTitle] = useState("");
  const { userID } = useUserAuth()
const focusTitle = useRef(null);

/* useEffect(() =>{
  focusTitle.current.focus();
}) */

  const handleChange = e => {
    setTitle(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() !== "") {
      await addDoc(collection(db, `users/${userID}/edges`), {
        title,
        completed: false,
        created: new Date()
      })
    }
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-2 xl:p-0 ">
      <div className="flex gap-2 w-full xl:w-[505px] m-auto h-11 xl:ml-9 xl:mr-9">
        <input
          type="text"
          placeholder="Enter Solution..."
          value={title}
          className="rounded-md w-full pl-1 border-4 rounded-bl-2xl rounded-tr-2xl border-x-lime-800 border-y-zinc-600"
          onChange={handleChange}
          // ref={focusTitle}
        />
        <button className="text-white text-base p-1 w-24 h-11 m-auto bg-slate-600 rounded-md">Add</button>
      </div>
    </form>
  );
}