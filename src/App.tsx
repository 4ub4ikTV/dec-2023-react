import React, {useState} from 'react';


import {Header} from "./components/Header/Header";
import {UsersPage} from "./pages/UsersPage";
import {CommentsPage} from "./pages/CommentsPage";
import {CarsPage} from "./pages/CarsPage";
import {PageEnum} from "./constans/page.enum";


function App() {

    const [choice, setChoice] = useState<PageEnum>(PageEnum.USERS);

    return (
        <div>
            <Header setChoice={setChoice}/>
            {choice === PageEnum.USERS && <UsersPage/>}
            {choice === PageEnum.COMMENTS && <CommentsPage/>}
            {choice === PageEnum.CARS && <CarsPage/>}
        </div>
    );
}

export default App;
