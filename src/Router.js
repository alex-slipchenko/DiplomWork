import Login from './containers/LoginPage';
import Product from './containers/ProductPage';
import Preview from './containers/PreviewPage';
import NotPage from './components/NoPage';
import ProductId from './containers/ProductId';
import PrivateRote from './PrivateRote';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRote />}>
          <Route path="/product" element={<Product />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/preview/:cardId" element={<ProductId />} />
        </Route>


        <Route path="*" element={<NotPage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default AppRouter;
