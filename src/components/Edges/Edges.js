import Solution from "./AddSolution";
import EdgeForm from "./EdgePopover";
import Edge from "./Edge";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../../fb";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../context/userAuthContext";
import { BottomNav, DesktopAppBar, MobileAppBar } from '../index';
import { BrowserView } from "react-device-detect";


const Edges = () => {
  const [edges, setEdges] = useState([]);
  const { userID } = useUserAuth()
  useEffect(() => {
    const q = query(collection(db, `users/${userID}/edges`), orderBy("created", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let edgesArray = [];
      querySnapshot.forEach((doc) => {
        edgesArray.push({ ...doc.data(), id: doc.id });
      });
      setEdges(edgesArray);
    });
    return () => unsubscribe();
  }, [userID]);

  const handleEdit = async (edge, title) => {
    await updateDoc(doc(db, `users/${userID}/edges`, edge.id), { title: title });
  };
  const toggleComplete = async (edge) => {
    await updateDoc(doc(db, `users/${userID}/edges`, edge.id), { completed: !edge.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, `users/${userID}/edges`, id));
  };

  return (
    <>
      <MobileAppBar />
      <div className="h-full min-h-screen md:w-9/12 xl:w-full xl:mt-0 md:pt-6 xl:pt-0 xl:pb-16 md:items-center md:m-auto mt-10 pb-20 m-2 grid-cols-1 auto-cols-max grid xl:grid-cols-2 xl:p-4 ">
        <div className="rounded-3xl border-4 m-auto w-full sm:landscape:w-3/4 min-h-[550px]">
          <div className="text-2xl xl:text-3xl text-center text-black dark:text-white font-bold mt-5 mb-5">Do you have an Edge?</div>
          <EdgeForm />
          <div className="text-2xl xl:3xl text-center text-black dark:text-white font-bold mt-5">Add A Solution</div>
          <div className="flex items-center justify-center m-auto mt-4">
            <Solution />

          </div>
          <div className="text-xl xl:text-2xl pl-2 xl:pl-10 text-black dark:text-white font-bold  mt-5">Solutions:</div>
          <div className="mt-3 w-full m-auto pl-2 pr-2 xl:pl-10 xl:pr-10 mb-10 overflow-y-scroll scrollbar scrollbar-thumb-zinc-500 scrollbar-track-zinc-600 max-h-[210px] ">
            {edges.map((edge, index) => (
              <div className="solutions-row rounded-md" key={index}>
                <Edge
                  key={index}
                  edge={edge}
                  toggleComplete={toggleComplete}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit} />
              </div>
            ))}
          </div> 
        </div>

        <article className="sm:landscape:w-3/4 sm:landscape:m-auto m-4 xl:m-20 xl:mt-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 relative md:mb-12 rounded-3xl md:transform md:-rotate-6 translate-y-14 lg:p-4 xl:p-0 font-body">
          <div className="bg-white h-full transform -rotate-3 sm:landscape:pb-4 rounded-3xl pl-6 md:pl-10 md:rotate-6 lg:p-10 md:px-6 md:py-4 shadow-lg lg:rounded-3xl">
            <h2 className="text-2xl font-extrabold mb-2 sm:landscape:pt-4">Edge Ideas:</h2>
            <ol className="list-disc text-base">
              <li className="list-disc">Feeling comfortable in my body</li>
              <li className="list-disc">Feeling ungrounded</li>
              <li className="list-disc">Afraid of not looking right</li>
              <li className="list-disc">Struggle to get motivated</li>
              <li className="list-disc">Struggle to get out of my head</li>
              <li className="list-disc">Low level of focus</li>
            </ol>
            <h2 className="text-2xl font-extrabold mb-2 mt-2">Potential Solutions:</h2>
            <ul className="list-disc text-base">
              <li className="list-disc hidden md:visible">Practice yoga sequence 3 times a week, bringing attention to breath rather than thinking</li>
              <li className="list-disc">Practice the standing postures 5 times a week, paying particular attention to your feet.</li>
              <li className="list-disc">Practice the yoga sequence with others and focus on the sound of yours and their breath</li>
              <li className="list-disc hidden md:visible">Chose a very short exercise (2 mins) either breathing or yoga sequence and commit to doing this everyday for 2 weeks.</li>
              <li className="list-disc">Arrive early and practice yoga nidra for 10 mins every morning before classes begin.</li>
              <li className="list-disc">Commit to a focal point for a session, either breath, Drishti, core and keep returning to this place. </li>
            </ul>
          </div>
        </article>

      </div>
    </>
  );
}
export default Edges;