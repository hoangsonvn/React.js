import React,{ useState,useEffect} from "react";

    const Hello = () => {
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            console.log('mounted or updated');
        });
        
        return (
            <>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </>
        );
    };
export default Hello;