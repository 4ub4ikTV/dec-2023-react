import React, {FC} from 'react';

import {ITodo} from "../../interfaces/todo.interface";

interface IProps {
    todo: ITodo
}

const Todo: FC<IProps> = ({todo}) => {

    let {id, title} = todo;

    return (
        <div>
            <h3>Id - {id}</h3>
            <h3>Title - {title}</h3>
        </div>
    );
};

export {Todo};