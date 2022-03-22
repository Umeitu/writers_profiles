import React from "react";


function profileCard({writer}) {
    return (
     <div className='card'>
        <img src= {`Images/${writer.avatar}.png`}
        height="300px width=300px" alt={writer.img}/>


<div className='textGroup'>
    <h3>{writer.name}</h3>
    <p>{writer.email}</p>
    <p>{writer.phone}</p>

    <button className='actionBtn'>read Bio</button> 


    </div> 
    </div>

)

}
export default profileCard;
