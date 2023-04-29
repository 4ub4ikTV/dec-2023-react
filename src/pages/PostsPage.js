import React from 'react';
import {Outlet} from "react-router-dom";
import {Posts} from "../components/Posts/Posts";

const PostsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Posts/>
        </div>
    );
};

export {PostsPage};