import CountDisplay from './CountDisplay';

export default function Counter({count, setCount}) {
    return (
        <>
            <CountDisplay props={count}/>
            <span>
                <button className='me-2 btn btn-primary' onClick={()=>{
                    setCount(count + 1);
                }}>
                    Increment +
                </button>
                <button className='btn btn-danger' onClick={()=>{
                    setCount(count - 1);
                }}>
                    Decrement -
                </button>
            </span>
            { count < 0 && setCount(0) }
        </> 
    );
}