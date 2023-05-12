import {Navigate, Route, Routes} from "react-router-dom";

import {CarPage, LoginPage, RegisterPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'login'}/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'register'} element={<RegisterPage/>}/>
            <Route path={'cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
