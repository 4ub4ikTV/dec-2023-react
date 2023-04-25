import {Navigate, Route, Routes} from "react-router-dom";

import {PostsPage} from "./pages/PostsPage/PostsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {MainLayout} from "./Layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'posts'}/>}/>

                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;


// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти
//
// Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}
// Реалізувати збереження окремо нового кота, та окремо собаку (приклад на зображенні)
//
// Advance
// реалізувати видалення для кожного при натисканні на кнопку delete
