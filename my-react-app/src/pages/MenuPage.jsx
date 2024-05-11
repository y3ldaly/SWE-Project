import Header from "../components/Header";
import MenuCard from "../components/MenuCard";

const MenuPage = () => {
  return (
    <div className="page menu__page">
      <Header />
      <div className="container">
        <h3 className="message">Cold and Hot Appetizers</h3>
        <div className="menu__wrapper">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>

        <h3 className="message">Sandwitches</h3>
        <div className="menu__wrapper">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
