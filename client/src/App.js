import ProductsPage from "./pages/ProductsPage";
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
