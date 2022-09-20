import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosContextProvider } from './context/productosContext';
import "./css/style.css"

import Menu from './components/menu';
import PageProductos from "./pages/productos/productos";

function App() {

  return (
    <BrowserRouter>
    <Menu />
    <ProductosContextProvider>
      <Routes>
        <Route path='/' element={
          <PageProductos />
        }/>
      </Routes>
    </ProductosContextProvider>
    </BrowserRouter>
  );
}

export default App;
