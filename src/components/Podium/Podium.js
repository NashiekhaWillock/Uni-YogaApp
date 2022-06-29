import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Podium() {

    const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
  }

  return (
    <div className=" text-center flex justify-center items-center gap-4 flex-col pt-36 md:pt-28 xl:pt-32 bg-white dark:bg-[#16444b] p-4 ">
        <h1 className='leaderboard mb-4 text-3xl md:text-4xl dark:text-white'>Performance Warriors</h1>

        <div className="flex justify-center gap-4">
            <button className="border-2 text-black rounded-2xl bg-[#184b53] dark:bg-white p-1 pl-4 pr-4 border-stone-700 bg-transparent cursor-pointer dark:border-[#37bcd1] dark:text-black" onClick={handleClick} data-id='7'>7 Days</button>
            <button className="border-2 text-black rounded-2xl bg-[#184b53] dark:bg-white p-1 pl-4 pr-4 border-stone-700 bg-transparent cursor-pointer dark:border-[#37bcd1]  dark:text-black" onClick={handleClick} data-id='30'>30 Days</button>
            <button className="border-2 text-black rounded-2xl bg-[#184b53] dark:bg-white p-1 pl-4 pr-4 border-stone-700 bg-transparent cursor-pointer dark:border-[#37bcd1]  dark:text-black" onClick={handleClick} data-id='0'>All-Time</button>
        </div>
        
        <div className="flex w-full md:w-3/4  xl:w-3/6 justify-between mt-6 text-xl">
        <h3 className='name text-black dark:text-white text-2xl'>Username</h3>    
        <h3 className='name text-black dark:text-white text-2xl'>Points</h3>  
        </div>
        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

    </div>
  )
}

function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between === 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with ascending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}