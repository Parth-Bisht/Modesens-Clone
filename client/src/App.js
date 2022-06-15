import ProductsPage from "./pages/ProductsPage";
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
import { Footer } from "./components/Footer/Footer";
import Men from "./pages/Men";
import Offers from "./pages/Offers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/men" element={<Men/>}/>
        <Route path="/offers" element={<Offers/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
