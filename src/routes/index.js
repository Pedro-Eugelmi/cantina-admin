import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Orders from '../pages/Orders';
import Settings from '../pages/Settings';
import Products from '../pages/Products';
import CreateProduct from '../pages/product/CreateProduct';
import UpdateProduct from '../pages/product/UpdateProduct';
import ViewOrder from '../pages/order/ViewOrder';
import PrivateRoute from './PrivateRoutes';
import Categories from '../pages/categories/Categories';
import CreateCategory from '../pages/categories/CreateCategory/CreateCategory';
import Users from '../pages/Users';
import CreateUser from '../pages/user/createUser/CreateUser';
import UpdateUser from '../pages/user/updateUser/UpdateUser';
import Page404 from '../pages/Page404';

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
          <Route path="/categorias" element={<Categories/>} />
          <Route path="/criar-categoria" element={<CreateCategory/>} />
          <Route path="/usuarios" element={<Users/>} />
          <Route path="/criar-usuario" element={<CreateUser/>} />
          <Route path="/editar-usuario" element={<UpdateUser/>} />
          <Route path="/nao-encontrado" element={<Page404/>} />
          <Route path="*" element={<Page404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
