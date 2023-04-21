import React, {FC} from 'react';

import {Comments} from "../../components/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage: FC = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};