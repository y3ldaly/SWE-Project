//import Header from "../components/Header";

const ComplimentSuccessPage = () => {
  return (
    <div className="page report__page">
      <Header />
      <div className="container">
        <p className="text-center message" style={{ marginTop: "90px" }}>
          Success! Your compliment has been submitted! Thank you for your awesome kindness!
        </p>
      </div>
    </div>
  );
};

export default ComplimentSuccessPage;
