import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./redux/actions/base-action-creator";

function App() {

    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(increment())
    }
    const dec = () => {
        dispatch(decrement())
    }
    const res = () => {
        dispatch(reset())
    }

    return (
        <div>
            <h1>{store}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={res}>Reset</button>
        </div>
    );
}

export default App;
