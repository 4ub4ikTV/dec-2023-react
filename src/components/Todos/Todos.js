import React, {useEffect, useState} from 'react';
import axios from "axios";

import {todos} from "../../urls/urls";
import {Todo} from "../Todo/Todo";


const Todos = () => {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        axios(todos).then(value => value.data).then(value => setTodo(value))
    }, [])

    return (
        <div>
            {todo.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};