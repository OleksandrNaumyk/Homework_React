import React, {memo, useCallback, useMemo, useState} from 'react';

const Test = memo(({name}) => {
    const [counter, setCounter] = useState(0);
//    useEffect(() => {
//         console.log('from main function');
// //        const interval = setInterval(() => console.log('from interval'), 1000)
// //        const interval = setInterval(() => console.log('from interval'), 1000)
//
//       return () => {
//         console.log('from cleanup function');
// //        clearInterval(interval);
//         }
//     }, [counter])

        console.log('test was rerendered');
        return <h2 onClick={() => setCounter((prev) => prev + 1)}>Something happen! {counter} {name}</h2>
});

export default function App() {

    const [isVisible, setIsVisible] = useState(false)

    const [arr, setArr] = useState([1, 3, 55, 2342, 999]);

    const totalPrice1 = useMemo(() => {
        return arr.reduce((acc, el) => acc+=el, 0);
    }, [arr]);

 //   const fnHandler = useCallback(() => {}, []);

    return (
            <div className={App}>
                <h2>Hello React{totalPrice1}</h2>

                <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
                <button onClick={() => setArr([...arr, Math.random()])}>
                    {" "}
                    add item to arr
                    {" "}
                </button>
                {isVisible && <Test name="test"/>}
            </div>
        );
}

