/* eslint-disable react/prop-types */
import image from "../assets/biryani.png";

// eslint-disable-next-line no-unused-vars
const MenuCard = ({ product }) => {
  return (
    <div className="card">
      <div className="content">
        <h3>Biryani</h3>
        <p>The custom decsription for this meal that you wrote is now reflected here.</p>
        <div className="stars">stars goes here</div>
      </div>
      <img src={image} alt="" className="card-image" />
      <p className="price__tag" style={{ color: "white" }}>
        10$
      </p>
    </div>
  );
};

export default MenuCard;
