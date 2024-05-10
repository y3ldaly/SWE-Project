import { ArrowSVG } from "./RegistrationPage";

const ManagerRegistration = () => {
  return (
    <div className="page manager__registration__page">
      <h1>HIFRY HALAL</h1>
      <div className="container">
        <button className="btn">
          Manager <ArrowSVG />
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
            <label>Manager ID</label>
            <input type="text" />
          </div>

          <div className="form__control">
            <label>Location Address</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManagerRegistration;
