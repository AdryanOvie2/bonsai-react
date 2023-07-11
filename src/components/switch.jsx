import '../styles/switch.css'

function Switch (){

    return(
        <>
            <label className="switch">
                <input id='price' className='checkbox' type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default Switch