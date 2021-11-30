
import React, {useState,useEffect} from "react";
import TinderCard from "react-tinder-card";
import axios from "axios"
import "./tinderCard.css";

function TinderCards(){
     const[people,setPeople] =useState([]);

     useEffect(()=>{
        async function getData (){
           const res =await axios.get("http://localhost:8000/tinder/card");
           setPeople(res.data)
        }
        getData()
     },[]);
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
                
             style={{ backgroundImage:`url(${person.imgUrl})`}}
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