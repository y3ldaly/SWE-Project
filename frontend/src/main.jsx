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


// Create a router instance
const router = createBrowserRouter([
  {
    path: '/register/customer',
    element: <CustomerRegistrationForm />,  // Assuming you want the App component at the root
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
    element: <Options/>,
  },
  {
    path: '/deregister',
    element: <Deregister/>
  },
  {
    path: '/order/in-store',
    element: <ReservationForm/>
  },
  {
    path: '/order/delivery',
    element: <Delivery/>
  },
  {
    path: '/order/pickup',
    element: <Pickup/>
  },
  {
    path: '/review/customer',
    element: <CustomerReportPage/>
  },
  {
    path: '/review/customer/dispute',
    element: <Form/>
  }
]);

// Select the root element, ensure it exists in your index.html
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create a root.
const root = createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
