import React, { useReducer, useState } from 'react';

const initialState = { cats: [], dogs: [] };

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_CAT':
            return { ...state, cats: [...state.cats, action.payload] };
        case 'ADD_DOG':
            return { ...state, dogs: [...state.dogs, action.payload] };
        case 'DELETE_CAT':
            return { ...state, cats: state.cats.filter((cat, index) => index !== action.payload) };
        case 'DELETE_DOG':
            return { ...state, dogs: state.dogs.filter((dog, index) => index !== action.payload) };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [animal, setAnimal] = useState('cat');
    const [name, setName] = useState('');

    const handleAnimalChange = (event) => {
        setAnimal(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (animal === 'cat') {
            dispatch({ type: 'ADD_CAT', payload: { name: name } });
        } else {
            dispatch({ type: 'ADD_DOG', payload: { name: name } });
        }
        setName('');
    };

    const handleDelete = (index) => {
        if (animal === 'cat') {
            dispatch({ type: 'DELETE_CAT', payload: index });
        } else {
            dispatch({ type: 'DELETE_DOG', payload: index });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Animal:
                    <select value={animal} onChange={handleAnimalChange}>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                    </select>
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
            <ul>
                {state.cats.map((cat, index) => (
                    <li key={index}>
                        {cat.name}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <ul>
                {state.dogs.map((dog, index) => (
                    <li key={index}>
                        {dog.name}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
