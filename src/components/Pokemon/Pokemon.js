import React from "react";
import "./Pokemon.scss"
// import "./Pokemon.css";


export default function Pokemon(props) {
    return (
      <div className="card shadow-sm mb-4 my-5 Pokemon">
        <div className="card-body pb-0">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-3 text-primary">{props.awesome ? "YES!" : "nope, not really"} </h6>
          <p className="mb-0">
            Weight: {props.weight} kg
            <br />
            Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
            <br />
            {props.abilities.length} abilities          
          </p>        
        </div>
        <ul className="list-group list-group-flush">
          {props.abilities.map(ability => {
            return <li className="list-group-item">{ability}</li>;            
          })}
        </ul>        
      </div>
      );
    }
      


      // <div>
      //   <h2>Pokemon name: {props.name}</h2>
      //   <p>Weight: {props.weight} kg</p>
      //   <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      //   <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      //   <p>Abilities: </p>
      //   <ul>
      //     {props.abilities.map(ability => {
      //       return <li>{ability}</li>;            
      //     })}
      //   </ul>
      // </div>
      
 
