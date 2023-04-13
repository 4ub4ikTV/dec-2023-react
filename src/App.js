import './App.css';
import {Posts} from "./components/Posts/Posts";
import {FullPosts} from "./components/FullPosts/FullPosts";
import {useState} from "react";

function App() {

    let [chosenPost, setChosenPost] = useState({})

    const lift = (obj) => {
        setChosenPost({...obj})
    }


    return (
        <div className="App">

            <FullPosts value={chosenPost}/>

            <Posts lift={lift}/>

        </div>
    );
}

export default App;


// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
//
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
//
//
// #Advance
//
// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)