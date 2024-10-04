
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navber'
import Products from './components/products/Products'

function App() {

 

  return (

    <Router>
    <div className="flex">
       
        <div className="flex-1">
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />} />
           
                
            </Routes>
        </div>
    </div>
</Router>
  //   <div className=' w-full h-screen'>
  //  <Shoe />
    // <ShoeOverLay />
  //   <ProductCard />
  //   <NikeShoe />
  //   <ClockCard />
  //   <CustomColorCard />
   
  //   </div>
  )
}

export default App
