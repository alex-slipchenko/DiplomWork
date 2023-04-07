import Login from './containers/LoginPage';
import Product from './containers/ProductPage';
import NotPage from './components/NoPage';
// import PrivateRote from './PrivateRote';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/product" element={<Product />} />

        <Route path="*" element={<NotPage />} />

      </Routes>
    </BrowserRouter>

    // <Login />
    // <Product />
  );
}

export default AppRouter;
