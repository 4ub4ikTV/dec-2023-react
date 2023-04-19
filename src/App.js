import {Link, Route, Routes} from "react-router-dom";
import React from "react";

import {Todos} from "./components/Todos/Todos";
import {Albums} from "./components/Albums/Albums";
import {Comments} from "./components/Comments/Comments";
import {DetailsPost} from "./components/DetailsPost/DetailsPost";
import {Posts} from "./components/Posts/Posts";

function App() {
    return (
        <div>
            <div className={'menu'}>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/todos'}>Todos</Link>
                    </li>
                    <li>
                        <Link to={'/albums'}>Albums</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>Comments</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>View</h2>
                <Routes>

                    <Route path={'/todos'} element={<Todos/>}></Route>
                    <Route path={'/albums'} element={<Albums/>}></Route>
                    <Route path={'/comments'} element={<Comments/>}></Route>
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={':id'} element={<DetailsPost/>}></Route>
                    </Route>

                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;


//     реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.