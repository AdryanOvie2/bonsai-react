/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import '../styles/card.css'

// eslint-disable-next-line react/prop-types
export default function Card({cardTitle, priceCost}){
    return(
        <div className='card'>
            <div className="card-header">
                <h3 className='card-title'>{cardTitle}</h3>
                <div className="card-price">
                    <span className="price-up">$</span>
                    <p className="price-cost">{priceCost}</p>
                    <span className="price-down">/MONTH</span>
                </div>
                    <hr className='card-divider' />
            </div>
            <ul className="card-body">
                <li><box-icon size='xs' color='green' name='check'/><p>Servicio 1</p></li>
                <li><box-icon size='xs' color='green' name='check'/><p>Servicio 2</p></li>
                <li><box-icon size='xs' color='green' name='check'/><p>Servicio 3</p></li>
                <li><box-icon size='xs' color='green' name='check'/><p>Servicio 4</p></li>
                <li><box-icon size='xs' color='green' name='check'/><p>Servicio 5</p></li>
                <li><box-icon size='xs' color='green' name='check'/><p>Servicio 6</p></li>
            </ul>
            <div className="card-footer">
                <a className='login-btnGreen' href="#">START FREE</a>
            </div>
        </div>
    );
}