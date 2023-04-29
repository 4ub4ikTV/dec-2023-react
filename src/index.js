import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


// В буквальному сенсі слова повторіть все що було на лекції
// наберіть це все руцями вдумуючись що ви повторюєте (не копіпастіть з мого репозиторію)
// після цього зробіть ще один слайс для постів і реалізуйте те саме що і для юзерсів
//
// Advance
// переробити першу таску с карами позбавившись стейтліфтингу в компонентах використовуючи redux-toolkit