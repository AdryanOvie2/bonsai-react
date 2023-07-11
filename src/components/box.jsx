import '../styles/box.css'

// eslint-disable-next-line react/prop-types
export default function Box({boxTitle, boxContent, boxValue, time}){
    return(
        <div className="box">
            <div className='box-left'>
                <h3 className="box-title">{boxTitle}</h3>
                <p className="box-content">{boxContent}</p>
            </div>
            <div className='box-right'>
                <p className="box-value">{boxValue}</p>
                <span>{time}</span>
            </div>
        </div>
    )
}