import React from "react";
import { v4 as uuidv4 } from 'uuid';
const todos = [
    {
        id: uuidv4(),
        title: "Al-Amin",
        description: "Senior Web Developer",
    },
    {
        id: uuidv4(),
        title: "Rasel",
        description: "Junior Web Developer",
    },
    {
        id: uuidv4(),
        title: "Jamia",
        description: "Java Developer",
    },
    {
        id: uuidv4(),
        title: "Apu",
        description: "Accountant",
    },
];
const List = () => {
    return  <div>
        {todos.map((todo) => {
            return <div key ={todo.id}>
              
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </div>
        } )}
    </div>
}
export  default List ;