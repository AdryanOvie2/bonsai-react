import '../styles/switch.css'
import { useState } from 'react';

function Switch (){
    const [check, setCheck] = useState(false)
    function handleClick(){
        setCheck(!check);
        console.log(check);
    }
    return(
        <>
            <label className="switch">
                <input id='price' className='checkbox' type="checkbox" onClick={handleClick}/>
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default Switch