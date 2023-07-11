import '../styles/price.css'
import Switch from './switch'
import Card from './card'

function Price(){
    return(
        <section className='section-price'>
            <div className="header-price">
                <h2>Plans & Pricing</h2>
                <div className="header-switch">
                    <label>MONTHLY</label>
                    <Switch/>
                    <label>YEARLY</label>
                </div>
            </div>
            <div className="cards">
                <Card cardTitle={'Workflow1'} priceCost={19}/>
                <Card cardTitle={'Workflow2'} priceCost={25}/>
                <Card cardTitle={'Workflow3'} priceCost={33}/>
            </div>
        </section>
    );
}

export default Price