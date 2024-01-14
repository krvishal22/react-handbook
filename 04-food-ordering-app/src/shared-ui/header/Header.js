import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"
          alt="logo"
        />
        <span className="title">What's in the Name!!!</span>
      </div>
      {/* <div className="nav-items"> */}
        <ul className="nav-items">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      {/* </div> */}
    </div>
  );
};

export default Header;
