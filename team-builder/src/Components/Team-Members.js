import React from 'react'; 

export default function TeamMember(props){
    const { stats } = props 

    return(
        <div className="team-info-container">
       <h2>Name:{stats.name}</h2> 
       <p>Email:{stats.email}</p>
       <p>Role:{stats.role}</p>
       </div>
    )

}