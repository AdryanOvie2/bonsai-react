import '../styles/dropbtn.css'
import 'boxicons'
import DropContent from './dropContent'

// eslint-disable-next-line react/prop-types
export default function DropBtn({title}){
    return(
        <li  className='dropbtn'>
            {title}
            <box-icon className='icon-down-arrow'size='xs' name='chevron-down' type='solid' color='#000' ></box-icon>
            <div className="dropdown-content">
                <DropContent url='#' titleName='Item 1'/>
                <DropContent url='#' titleName='Item 2'/>
                <DropContent url='#' titleName='Item 3'/>
            </div>
        </li>
    )
}