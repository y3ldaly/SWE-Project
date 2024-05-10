import RegistrationPage from "./pages/RegistrationPage";
import DeliveryMenRegistration from "./pages/DeliveryMenRegistration";
import ManagerRegistration from "./pages/ManagerRegistration";
import ReportPage from "./pages/ReportPage";
import ReviewPage from "./pages/ReviewPage";
import ComplainSuccessPage from "./pages/ComplainSuccessPage";
import ComplimentSuccessPage from "./pages/ComplimentSuccessPage";
import DiscussionPage from "./pages/DiscussionPage";
import LastPage from "./pages/LastPage";
import MenuPage from "./pages/MenuPage";
import PaymentDetailsPage from "./pages/PaymentDetailsPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderPrompt from "./pages/OrderPrompt";

const App = () => {
  return (
    <div>
      <RegistrationPage />
      <ManagerRegistration />
      <DeliveryMenRegistration />
      <ReviewPage />
      <ReportPage />
      <OrderConfirmationPage />
      <ComplainSuccessPage />
      <ComplimentSuccessPage />
      <DiscussionPage />
      <LastPage />
      <OrderPrompt />
      <MenuPage />
      <PaymentDetailsPage />
    </div>
  );
};

export default App;
