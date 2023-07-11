import '../styles/addOns.css'
import Box from './box'

export default function AddOns(){
    return(
        <div className='section-addOns'>
            <h2>Super charge you work with add-ons</h2>
            <Box 
                boxTitle={'Collaborators'} 
                boxContent={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, error?'} 
                boxValue={'Free'} 
                time={''}
            />
            <Box 
                boxTitle={'Partners'} 
                boxContent={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, error?'} 
                boxValue={'$9'} 
                time={'/month'}
            />
            <Box 
                boxTitle={'Collaborators'} 
                boxContent={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, error?'} 
                boxValue={'$10'} 
                time={'/month'}
            />
        </div>
    )
}