//import image from "../assets/deliveryboy.jpg";
const OrderConfirmationPage = () => {
  return (
    <div className="container page order__confirmation__page">
      <h2>Thank you for your order!</h2>
      <p className="order__id">#Rabcde</p>
      <p>Your devliveryman is : </p>
      <h4>John Doe</h4>
      <div className="avatar">
        <img src={image} alt="" />
      </div>
      <p>
        Your order is <span className="text-green">being deliverd...</span>
      </p>

      <div className="bottom">
        <p>Make another order! Or return home. </p>
        <div className="buttons__wrapper">
          <button className="btn btn-blue">Return home</button>
          <button className="btn btn-red-outline">Place another order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
