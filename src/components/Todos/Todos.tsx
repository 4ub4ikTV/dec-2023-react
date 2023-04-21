import React, {FC, useEffect, useState} from 'react';

import {ITodo} from "../../interfaces/todo.interface";
import {todoService} from "../../services/todo.service";
import {Todo} from "../Todo/Todo";


const Todos: FC = () => {

    let [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        todoService.getAll().then(value => value.data).then(value => setTodos(value))
    }, [])

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};