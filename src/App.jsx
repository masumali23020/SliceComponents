import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navber";
import Products from "./pages/prducts/Products";
import PaymentTable from "./components/table/payment";

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/day2" element={<PaymentTable />} />
          
          </Routes>
        </div>
      </div>
    </Router>
    //   <div classNameName=' w-full h-screen'>
    //  <Shoe />
    // <ShoeOverLay />
    //   <ProductCard />
    //   <NikeShoe />
    //   <ClockCard />
    //   <CustomColorCard />

    //   </div>
  );
}

export default App;
