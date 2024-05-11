import { ArrowSVG } from "./RegistrationPage";

const DeliveryMenRegistration = () => {
  return (
    <div className="page deliveryman__registration__page">
      <h1>HIFRY HALAL</h1>
      <div className="container">
        <button className="btn">
          Deliveryman <ArrowSVG />
        </button>
        <form>
          <div className="form__control">
            <label>Username</label>
            <input type="text" />
          </div>

          <div className="form__control">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="form__control">
            <label>Delivery ID</label>
            <input type="text" />
          </div>

          <div className="form__control">
            <label>Mode of Delivery</label>
            <input type="text" />
          </div>

          <div className="form__control">
            <label>Phone Number</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryMenRegistration;
