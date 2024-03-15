import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    

    return (
        <>
            <h2 className='p-5'>{count}</h2>
            <span>
                <button className='me-2' onClick={()=>{
                    setCount(count + 1);
                }}>
                    Increment
                </button>
                <button onClick={()=>{
                    setCount(count - 1);
                }}>
                    Decrement
                </button>
            </span>
            { count < 0 && setCount(0) }
        </> 
    );
}