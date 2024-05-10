const RegistrationPage = () => {
  return (
    <div className="page registration__page">
      <h1>HIFRY HALAL</h1>
      <div className="container">
        <p className="text-center">Select the type of user you’d like to register as:</p>
        <div className="buttonsContainer">
          <button className="btn">
            Manager <ArrowSVG />
          </button>
          <button className="btn">
            Chef <ArrowSVG />
          </button>
          <button className="btn">
            Deliveryman <ArrowSVG />
          </button>
          <button className="btn">
            Customer <ArrowSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

export const ArrowSVG = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
        stroke="#000000"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
