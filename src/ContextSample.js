import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue')

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요? {text} </div>
}

function Parent() {
    return <Child />
}

function GrandParent() {
    return <Parent />
}

function ContextSample({text}) {
    const [value, setvalue] = useState(true);
    return (
    <MyContext.Provider value = {value ? "GOOD" : "BAD"}>
        <GrandParent />
        <button onClick={() => setvalue(!value)}>CLICK ME</button>
    </MyContext.Provider>
    )
}

export default ContextSample;