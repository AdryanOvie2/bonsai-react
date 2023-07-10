import '../styles/navbar.css'
import 'boxicons'

function Navbar (){
    return(
        <ul className='navbar'>
            <li className='dropbtn'>
                Product
                <box-icon className='icon-down-arrow'size='xs' name='down-arrow' type='solid' color='#000' ></box-icon>
                <div className="dropdown-content">
                    <a href="#">Product 1</a>
                    <a href="#">Product 2</a>
                    <a href="#">Product 3</a>
                </div>
            </li>
            <li className='dropbtn'>
                <p>Templates</p>
                <box-icon className='icon-down-arrow'size='xs' name='down-arrow' type='solid' color='#000' ></box-icon>
                <div className="dropdown-content">
                    <a href="#">Template 1</a>
                    <a href="#">Template 2</a>
                    <a href="#">Template 3</a>
                </div>
            </li>
            <li>Pricing</li>
            <li>Reviews</li>
        </ul>
    );
}

export default Navbar