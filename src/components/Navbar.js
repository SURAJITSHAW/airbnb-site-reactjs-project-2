import airbnbLogo from "../assets/airbnbLogo.png";

const NavBar = () => {
  return (
    <div className="container p-2">
      <nav className="shadow-sm border-bottom my-2 py-2">
        <img style={{width: "120px"}} src={airbnbLogo} alt="airbnb-logo" className="img-fluid"/>
      </nav>
    </div>
  );
};

export default NavBar;