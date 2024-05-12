import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import LoginForm from './pages/Surfers/Login/LoginForm';
import CustomerRegistrationForm from './pages/Surfers/Register/CustomerRegForm';
import ChefDescriptionPage from './pages/Chefs/ChefDescriptionPage';
import Form from './components/Form/Form';
import UserHomeScreen from './pages/Users/HomeScreen/UserHomeScreen';
import SelectOrderTypePage from './pages/Users/Order/SelectOrderTypePage';


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
    path: '/menus/description',
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
