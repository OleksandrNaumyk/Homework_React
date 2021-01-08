import React, {useState, useEffect, useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODO': {
            return action.payload;
        }
        case 'CHANGE_TODO_STATUS': {
            return {...state,
            completed: !state.completed
            };
        }
        case 'CHANGE_TODO_TITLE': {
            return {
                ...state,
                title: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const initialState = {
    userId: null,
    id: null,
    title: '',
    completed: false
};

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
//    const [user, setUser] = useState({name: "a", age: 30});
    const [counter, setCounter] = useState(1);
//    const [todo, setTodo] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: 'SET_TODO', payload: json})
                console.log(json);
            })
    }, [counter]);

    const onClickHandler = () => setCounter((prev) => prev + 1);
    const onStatusChange = () => dispatch({type: 'CHANGE_TODO_STATUS'})
    const onTitleChange = () => dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()})

    return (
            <div className={App}>
                <button onClick={onClickHandler}>inc</button>
                <button onClick={onStatusChange}>change todo status</button>
                <button onClick={onTitleChange}>change todo title</button>
                <h1>Counter value: {counter}</h1>
                {
                    !!state && (
                        <>
                            <h2>{state.id}</h2>
                            <h2>{state.title}</h2>
                            <h2>{state.completed.toString()}</h2>
                        </>
                    )
                }
            </div>
        );
}

