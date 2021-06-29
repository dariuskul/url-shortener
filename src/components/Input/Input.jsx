
import { useState } from 'react';
import { isUrlValid } from '../../isUrlValid';
import './input.css'
const Input = ({setUrl, onSubmit}) => {
    
    return(
        <section className='input__section'>
            <form className="link__form" onSubmit={onSubmit}>
                <input onChange={(e)=> setUrl(e.target.value)} className="link__child" type="text" placeholder='Shorten a link here..' />
                <button className="link__child">Shorten it!</button>
            </form>
        </section>
    )
}

export default Input;