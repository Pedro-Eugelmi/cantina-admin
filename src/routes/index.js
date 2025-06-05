import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Orders from '../pages/Orders';
import Settings from '../pages/Settings';
import Products from '../pages/Products';
import CreateProduct from '../pages/product/CreateProduct';
import UpdateProduct from '../pages/product/UpdateProduct';
import ViewOrder from '../pages/order/ViewOrder';
import PrivateRoute from './PrivateRoutes';

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route element={<PrivateRoute />}>
          <Route path="/pedidos" element={<Orders/>} />
          <Route path="/ver-pedido" element={<ViewOrder/>} />
          <Route path="/configuracoes" element={<Settings/>} />
          <Route path="/produtos" element={<Products/>} />
          <Route path="/criar-produto" element={<CreateProduct/>} />
          <Route path="/editar-produto" element={<UpdateProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
