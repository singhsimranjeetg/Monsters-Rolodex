//this component is responsible for how our card should look like
//in this file we are exporting the Card component to the card-component-list 
//and getting the monster array in that file the passed to the props in this

import React from "react"
import "./card.styles.css"

export const Card = (props) => ( 
    <div className = "card-container">     
        <img alt = "monster" src = {`https://robohash.org/${props.monster.id}?set=set2`} />
        <h2> {props.monster.name} </h2>
        <p>{props.monster.email}</p>
        
    </div>
)