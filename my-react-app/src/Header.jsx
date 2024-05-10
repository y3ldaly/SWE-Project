import avatar from "../assets/avatar.png";
const Header = () => {
  return (
    <header>
      <h1 className="text__red">HIFRY HALAL</h1>
      <nav>
        <p className="nav__item">Home</p>
        <p className="nav__item">Menu</p>
        <p className="nav__item">Order</p>
        <p className="nav__item nav__item__active">Review</p>
        <p className="nav__item">About</p>
        <img src={avatar} alt="avatar" />
      </nav>
    </header>
  );
};

export default Header;
