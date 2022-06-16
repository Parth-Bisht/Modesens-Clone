import ProductsPage from "./pages/ProductsPage";
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
import { Footer } from "./components/Footer/Footer";
import Men from "./pages/Men";
import Offers from "./pages/Offers";
import Women from "./pages/Women";
import WhyModesensPage from "./pages/WhyModesensPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/whymodsens" element={<WhyModesensPage/>}></Route>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
