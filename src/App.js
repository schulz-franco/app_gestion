import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosContextProvider } from './context/productosContext';
import "./css/style.css"

import Menu from './components/menu';
import PageProductos from "./pages/productos/index";
import PageCarrito from './pages/carrito';
import PageVentas from './pages/ventas';

function App() {

  return (
    <BrowserRouter>
    <ProductosContextProvider>
    <Menu />
      <Routes>
        <Route path='/productos' element={
          <PageProductos />
        }/>
        <Route path='/carrito' element={
          <PageCarrito />
        }/>
        <Route path='/ventas' element={
          <PageVentas />
        }/>
      </Routes>
    </ProductosContextProvider>
    </BrowserRouter>
  );
}

export default App;
