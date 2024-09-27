// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home';
import About from './Component/About'; // Import other components as needed
import './index.css';
import ProductDetails from './Component/ProductDetails.jsx';
import ProductListing from './Component/ProductListing.jsx';

// Create a router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main App component
    children: [
      {
        path: '',
        element: <Home />, // Home component
      },
      {
        path: 'about',
        element: <About />, // About component
      },
      {
        path: 'products',
              element: <ProductListing/>, 
            },
     {
        path: 'products/product-details/:id',
              element: <ProductDetails/>, 
           },
         
            // Add more routes as needed
          ],
        },
      ]);

      createRoot(document.getElementById('root')).render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      );
