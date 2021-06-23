import working from '../../assets/illustration-working.svg'
import './hero.css'
const Hero = () => {
    return(
        <section className="hero__section">
            <img className='hero__img' src={working} alt="working" />

            <div className="hero__typography">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get started</button>
            </div>
        </section>
    )
}

export default Hero;