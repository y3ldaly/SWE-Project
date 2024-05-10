import Header from "../components/Header";

const ComplainSuccessPage = () => {
  return (
    <div className="page report__page">
      <Header />
      <div className="container">
        <p className="text-center message" style={{ marginTop: "90px" }}>
          Success! Your [complaint/report] has been submitted! The manager will review your report shortly.
        </p>
      </div>
    </div>
  );
};

export default ComplainSuccessPage;
