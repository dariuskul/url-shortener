
import './input.css'
const Input = () => {
    return(
        <section className='input__section'>
            <form className="link__form" action="">
                <input className="link__child" type="text" placeholder='Shorten a link here..' />
                <button className="link__child">Shorten it!</button>
            </form>
        </section>
    )
}

export default Input;