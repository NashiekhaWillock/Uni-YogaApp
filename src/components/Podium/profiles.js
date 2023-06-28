import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div className="h-full min-h-screen landscape:pb-20 w-full md:w-3/4 xl:w-1/2">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex justify-between gap-4 text-left " key={index}>
                        <div className="flex items-center xl:pt-2">
                        
                            <img src={value.img} alt="" className=" w-1/5 rounded-[50%]"/>
            
                            <div className="p-6">
                                <h3 className='name text-black dark:text-white text-xl'>{value.name}</h3>    
                         
                            </div>                
                        </div>
                        <div className="flex items-center dark:text-white text-xl">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}