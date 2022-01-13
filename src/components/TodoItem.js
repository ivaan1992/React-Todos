import React from "react";



export default function TodoItem(props) {
  return ( 
    <li>
     <input type="checkbox" /> {props.todo.completed} 
    </li>
  )
}

