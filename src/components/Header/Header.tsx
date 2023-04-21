import React, {FC} from 'react';
import css from './Header.module.css'
import {useNavigate} from "react-router-dom";

const Header: FC = () => {

        const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button onClick={()=> navigate('todos')}>Todos</button>
            <button onClick={()=> navigate('albums')}>Albums</button>
            <button onClick={()=> navigate('comments')}>Comments</button>
        </div>
    );
};

export {Header};