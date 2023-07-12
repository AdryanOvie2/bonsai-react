import '../styles/navbar.css'
import 'boxicons'
import DropBtn from './dropbtn'

const itemLis = [
    { id: 1, title: 'Pricing' , hrf: '#'},
    { id: 2, title: 'Reviews' , hrf: '#'},
]

function Navbar (){
    const menuLi = itemLis.map(itemLi =>
        <li key={itemLi.id}>
            <a href={itemLi.hrf}>
            {itemLi.title}
            </a>
        </li>
      );
    return(
        <ul className='navbar'>
            <DropBtn title='Product'/>
            <DropBtn title='Template'/>
            {menuLi}
        </ul>
    );
}

export default Navbar