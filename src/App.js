import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {Post} from "./components/Post/Post";



function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'todos'}/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>

            </Route>
        </Routes>
    );
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