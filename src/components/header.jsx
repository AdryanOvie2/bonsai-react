import '../styles/header.css'
import Logo from './logo'
import Navbar from './navbar'
import Login from './login'

function Header(){
    return(
        <header>
            <div className='header-logo'>
                <Logo/>
            </div>
            <Navbar/>
            <Login/>
        </header>
    );
}

export default Header