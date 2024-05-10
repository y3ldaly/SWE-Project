import Header from "../components/Header";

const DiscussionPage = () => {
  return (
    <div className="page report__page">
      <Header />
      <div className="container">
        <p className="text-center message" style={{ marginTop: "90px" }}>
          Success! Your dispute has been submitted! The manager will review your dispute shortly. You will be notified of your status soon.
        </p>
      </div>
    </div>
  );
};

export default DiscussionPage;
