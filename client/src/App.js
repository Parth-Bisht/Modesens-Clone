import ProductsPage from "./pages/ProductsPage";
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
import { Footer } from "./components/Footer/Footer";
import WhyModesensPage from "./pages/WhyModesensPage";
import OffersPage from "./pages/OffersPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/whymodsens" element={<WhyModesensPage/>}></Route>
        <Route path="/offers" element={<OffersPage/>}></Route>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
