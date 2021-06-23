const MobileMenu = () => {
  return (
    <div className="mobile__container">
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <span></span>
        <div className="buttons"></div>
          <button className="mobile__login">Login</button>
          <button className="mobile__register">Sign up</button>
        <div/>
      </ul>
    </div>
  );
};

export default MobileMenu;
