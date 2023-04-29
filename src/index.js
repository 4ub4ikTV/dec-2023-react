import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {usersStore} from "./redux/store/users.store";
import {BrowserRouter} from "react-router-dom";
import {postService} from "./services/post.service";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={usersStore}>
            <App/>
        </Provider>
    </BrowserRouter>
);
