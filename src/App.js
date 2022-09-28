import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosContextProvider } from './context/productosContext';
import "./css/style.css"

import Menu from './components/menu';
import PageProductos from "./pages/productos/index";

const PageCarrito = lazy(()=> import("./pages/carrito/index"))
const PageVentas = lazy(()=> import("./pages/ventas/index"))
const PageStock = lazy(()=> import("./pages/stock/index"))

function App() {

  return (
    <BrowserRouter>
      <ProductosContextProvider>
        <Menu />
          <Suspense fallback={<></>}>
            <Routes>
              <Route path='/' element={
                  <PageProductos />
                }/>
                <Route path='/productos' element={
                  <PageProductos />
                }/>
                <Route path='/carrito' element={
                  <PageCarrito />
                }/>
                <Route path='/ventas' element={
                  <PageVentas />
                }/>
                <Route path='/stock' element={
                  <PageStock />
                }/>
            </Routes>
          </Suspense>
      </ProductosContextProvider>
    </BrowserRouter>
  );
}

export default App;
