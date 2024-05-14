import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import LoginForm from './pages/Surfers/Login/LoginForm';
import CustomerRegistrationForm from './pages/Surfers/Register/CustomerRegForm';
import ChefDescriptionPage from './pages/Chefs/ChefDescriptionPage';
import UserHomeScreen from './pages/Users/HomeScreen/UserHomeScreen';
import SelectOrderTypePage from './pages/Users/Order/SelectOrderTypePage';
import FullMenuPage from './pages/Users/Menu/FullMenuPage';
import Options from './pages/Users/Review/who';
import Deregister from './pages/Users/Deregister/Deregister';
import ReservationForm from './pages/Users/Payment/InStore';
import PaymentPage from './pages/Users/Payment/Delivery';
import Delivery from './pages/Users/Payment/Delivery';
import Pickup from './pages/Users/Payment/Pickup';
import CustomerReportPage from './pages/Users/Review/CustomerReportPage';
import Form from './components/Form/Form';
import ChefComplaintPage from './pages/incomplete/ChefComplaintPage';
import ChefComplimentPage from './pages/incomplete/ChefComplimentPage';
import ComplainSuccessPage from './pages/incomplete/ComplainSuccessPage';
import ComplimentSuccessPage from './pages/incomplete/ComplimentSuccessPage';
import CustomerReportPage2 from './pages/incomplete/CustomerReportPage2';
//import DeliveryOrderPage1 from './pages/incomplete/DeliveryOrderPage1';
import DiscussionPage from './pages/incomplete/DiscussionPage';
//import InStoreOrderPage1 from './pages/incomplete/InStoreOrderPage1';
import LastPage from './pages/incomplete/LastPage';
import MenuOverviewPage from './pages/incomplete/MenuOverviewPage';
import OrderConfirmationPage from './pages/incomplete/OrderConfirmationPage';
import PaymentDetailsPage from './pages/incomplete/PaymentDetailsPage';
//import PickupOrderPage1 from './pages/incomplete/PickupOrderPage1';
import ReportPage from './pages/incomplete/ReportPage';
import ReviewPage from './pages/incomplete/ReviewPage';
import UserViewComplaintsPage from './pages/incomplete/UserViewComplaintsPage';
import DemoteChefsPage from './pages/Manager/Pages/DemoteChefsPage';
import FraudComplaintPage from './pages/Manager/Pages/FraudComplaintPage';
import ManagerDashboardPage from './pages/Manager/Pages/ManagerDashboardPage';
import PromoteChefsPage from './pages/Manager/Pages/PromoteChefsPage';





import store from './redux/store';
import { Provider } from 'react-redux';
import AddDeposit from './pages/incomplete/addDepoist';
import DeliveryMenRegistration from './pages/incomplete/DeliveryMenRegistration';
import ManagerRegistrationForm from './pages/incomplete/ManagerRegForm';
import ManagerAction from './pages/Manager/Pages/ManagerAction';
// Create a router instance
const router = createBrowserRouter([
  {
    path: '/register/customer',
    element: <CustomerRegistrationForm />,  // Assuming you want the App component at the root
  },
  {
    path: '/register/deliveryman',
    element: <DeliveryMenRegistration />,  // Assuming you want the App component at the root
  },
  {
    path: '/register/manager',
    element: <ManagerRegistrationForm />,  // Assuming you want the App component at the root
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/menu/description',
    element: <ChefDescriptionPage />, //this page needs to be fixed
  },
  {
    path: '/',
    element: <UserHomeScreen />, //this page needs to be fixed
  },
  {
    path: '/order',
    element: <SelectOrderTypePage />, //this page needs to be fixed
  },
  {
    path: '/menu',
    element: <FullMenuPage />, //this page needs to be fixed
  },
  {
    path: '/review',
    element: <Options />,
  },
  {
    path: '/review/customer',
    element: <CustomerReportPage />
  },
  {
    path: '/review/customer/dispute',
    element: <Form />
  },
  {
    path: '/review/chef',
    element: <ChefComplaintPage />
  },
  {
    path: '/deregister',
    element: <Deregister />
  },
  {
    path: '/order/in-store',
    element: <ReservationForm />
  },
  {
    path: '/order/delivery',
    element: <Delivery />
  },
  {
    path: '/order/pickup',
    element: <Pickup />
  },
  {
    path: '/compliment',
    element: <ChefComplimentPage />
  }
  ,
  {
    path: '/description',
    element: <ChefDescriptionPage />
  }
  ,
  {
    path: '/complainsuccess',
    element: <ComplainSuccessPage />
  }

  ,
  {
    path: '/complimentsuccess',
    element: <ComplimentSuccessPage />
  }
  ,
  {
    path: '/customer',
    element: <CustomerReportPage />
  }
  ,
  {
    path: '/customer2',
    element: <CustomerReportPage2 />
  }
  ,
  {
    path: '/discussion',
    element: <DiscussionPage />
  }
  ,
  {
    path: '/menu',
    element: <FullMenuPage />
  }
  ,

  {
    path: '/last',
    element: <LastPage />
  },
  {
    path: '/menuoverview',
    element: <MenuOverviewPage />
  },
  {
    path: '/orderconfirmation',
    element: <OrderConfirmationPage />
  },
  {
    path: '/paymentdetail',
    element: <PaymentDetailsPage />
  },
  {
    path: '/payment',
    element: <PaymentPage />
  },
  {
    path: '/report',
    element: <ReportPage />
  },
  {
    path: '/review',
    element: <ReviewPage />
  },
  {
    path: '/ordertype',
    element: <SelectOrderTypePage />
  },
  {
    path: '/manager',
    element: <ManagerDashboardPage />
  },
  {
    path: '/manager/viewcomplaint',
    element: <UserViewComplaintsPage />
  },
  {
    path: '/manager/demote',
    element: <DemoteChefsPage />
  },
  {
    path: '/manager/fraudcomplaint',
    element: <FraudComplaintPage />
  },
  {
    path: '/manager/promote',
    element: <PromoteChefsPage />
  },
  {
    path: '/manager/action',
    element: <ManagerAction />
  },
  {
    path: '/fullmenu',
    element: <FullMenuPage />
  },
  {
    path: '/ordertype',
    element: <SelectOrderTypePage />
  },
  {
    path: '/customerreport',
    element: <CustomerReportPage />
  },
  {
    path: '/incomplete/addDeposit',
    element: <AddDeposit />,
  },
]);

// Select the root element, ensure it exists in your index.html
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create a root.
const root = createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
