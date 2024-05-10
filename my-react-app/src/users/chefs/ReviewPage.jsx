import Header from "../../../../src/components/Header";
import image from "../assets/biryani.png";

const ReviewPage = () => {
  return (
    <div className="page review__page">
      <Header />
      <div className="container">
        <p className="text-center message">
          Success! The description for [selected meal] <br /> was updated.
        </p>
        <div className="card">
          <div className="content">
            <h3>Biryani</h3>
            <p>The custom decsription for this meal that you wrote is now reflected here.</p>
            <div className="stars">stars goes here</div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
