import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosContextProvider } from './context/productosContext';
import "./css/style.css"
import PageProductos from "./pages/productos/productos";

function App() {

  return (
    <BrowserRouter>
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
