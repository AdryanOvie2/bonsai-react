import '../styles/accordion.css'
import Accordion from './accordion'

export default function Accordions(){
    
    return(
        <div className="section-accordion">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
            <Accordion titleAccordion={'How does the 14 day free trial work?'}/>
            <Accordion titleAccordion={'Can i change plans anytime?'}/>
            <Accordion titleAccordion={'How do you pause my Bonsai subscription?'}/>
            <Accordion titleAccordion={'What is  your refund policy?'}/>
            </div>
        </div>
    );
}