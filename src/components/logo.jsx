import bonsaiLogo from '../assets/bonsai-logo.svg'

function Logo (){
    return(
        <a href="./" rel='noreferrer'>
            <img src={bonsaiLogo} alt="" />
        </a>
    );
}

export default Logo