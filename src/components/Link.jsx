import { useState } from "react";
import "./link.css";
const Link = ({ originalLink, shortenedLink }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    let copyText = document.getElementById("short").innerText;
    let temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = copyText;
    temp.select();
    temp.setSelectionRange(0, 99999); // mobile devices
    document.execCommand("copy");
    document.body.removeChild(temp);
    setClicked(true);
  };

  let btnClass = clicked ? "button__clicked" : "copy__button";
  return (
    <div className="link__container">
      <div className="link__wrapper">
        <h3 className="old__link">{originalLink}</h3>
        <span className="divisor"></span>
        <div className="shortener__wrapper">
          <h3 id="short" className="new__link">
            {shortenedLink}
          </h3>
          <button onClick={handleClick} className={btnClass}>
            {clicked ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Link;
