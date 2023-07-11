import '../styles/accordion.css'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Accordion({titleAccordion}){
    const [expanded, setExpanded] = useState(false);
        
        function expand(){
            setExpanded(!expanded);
        }

    return(
        <>
            <div className={`accordion-header ${expanded ? 'active' : ''}`} onClick={expand}>{titleAccordion}</div>
            <div className={`accordion-panel ${expanded ? 'accordion-expanded' : 'hidden'}`}>
                <p>Lorem ipsum dolor sith amet adipisicing elit. Quibusdam laboriosam at modi voluptates sed. Praesentium alias beatae quis consequuntur neque officia explicabo eligendi aut odio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eaque sit dolorem earum voluptatem provident.</p>
            </div>
        </>
    )
}