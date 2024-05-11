import Header from "../components/Header";

const ReportPage = () => {
  return (
    <div className="page report__page">
      <Header />
      <div className="container">
        <p className="text-center message">Select one of the following:</p>
        <div className="card__container">
          <div className="card">
            <p className="card__text">Write a compliment! 😊 </p>
          </div>
          <div className="card">
            <p className="card__text">Write a complaint! 😠</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
