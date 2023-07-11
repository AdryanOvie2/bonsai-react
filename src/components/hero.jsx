import '../styles/hero.css'

export default function Hero(){
    return(
        <div className="section-hero">
            <div className="hero-content">
                <div className="hero-left">
                    <p>It`s <span>your</span> business.</p>
                    <p>We`re here to help it grow.</p>
                </div>
                <div className="hero-right">
                    <a className="login-btnGreen" href="#">START FREE</a>
                </div>
            </div>
        </div>
    )
}