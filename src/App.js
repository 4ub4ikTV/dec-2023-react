import {Users} from "./components/Users/Users";
import {Comments} from "./components/Comments/Comments";
import {Cars} from "./components/Cars/Cars";

function App() {
    return (
        <div className="App">
            <Users/>
            <hr/>
            <Comments/>
            <Cars/>
        </div>
    );
}

export default App;


//
// 1.Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
//
//   2.http://owu.linkpc.net/carsAPI/v1/doc
//         Реалізувати створення, видалення та оновлення машин