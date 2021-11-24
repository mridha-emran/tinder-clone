
import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./tinderCard.css";

function TinderCards(){
     const[people,setPeople] =useState([
         {
             name: "bbac",
             url :"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

     },
     {
         name:"ccrc",
         url :"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     }
     ]);
     const swiped =(dirction, nameToDelete) => {
         console.log("removeing:" , nameToDelete)
     }
     const outOfFrame =(name) => {
         console.log("removename:" , name)
     }

     console.log(people)
    return(
        <div className ="tinderCard">
            <div className="tinderCards-container">
          <h1>good</h1> 
        {people.map((person) =>(
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe ={ (dir)=> swiped(dir, person.name)}
            onCardLeftScreen ={()=>{outOfFrame(person.name)}}  
            >
             <div 
                
             style={{ backgroundImage:`url(${person.url})`}}
             className="card">
                 <h3>{person.name} </h3>
             </div>

            </TinderCard>
        ))}
            </div>
        </div>
    )
}

export default TinderCards;