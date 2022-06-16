import ProductsPage from "./pages/ProductsPage";
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
import { Footer } from "./components/Footer/Footer";
import WhyModesensPage from "./pages/WhyModesensPage";
import OffersPage from "./pages/OffersPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/whymodsens" element={<WhyModesensPage/>}></Route>
        <Route path="/offers" element={<OffersPage/>}></Route>
        <Route path="/men" element={<MenPage/>}></Route>
        <Route path="/men/:id" element={<SingleProduct/>}></Route>
        <Route path="/women" element={<WomenPage/>}></Route>
        <Route path="/women/:id" element={<SingleProduct/>}></Route>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
