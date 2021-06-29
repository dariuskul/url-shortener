import { useState } from 'react';
import './link.css'
const Link = ({originalLink, shortenedLink}) => {
    const [clicked,setClicked] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(shortenedLink).then(()=> {
            setClicked(true);
        });
    }

    let btnClass = clicked ? 'button__clicked' : 'copy__button';
    return(
        <div className="link__container">
            <div className="link__wrapper">
                <h3 className="old__link">{originalLink}</h3>
                <span className="divisor"></span>
                <div className="shortener__wrapper">
                    <h3 className="new__link">{shortenedLink}</h3>
                    <button onClick={handleClick} className={btnClass}>{clicked ? 'Copied!' : 'Copy'}</button>
                </div>
            </div>
        </div>
    )
}

export default Link;