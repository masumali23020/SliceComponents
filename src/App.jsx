

import './App.css'
import ClockCard from './components/shoe/ClockCard'
import CustomColorCard from './components/shoe/CustomColorCard'
import NikeShoe from './components/shoe/NikeShoe'
import ProductCard from './components/shoe/ProductCard'
import Shoe from './components/shoe/Shoe'
import ShoeOverLay from './components/shoe/ShoeOverLay'

function App() {


  return (
    <div className=' w-full h-screen'>
   <Shoe />
    <ShoeOverLay />
    <ProductCard />
    <NikeShoe />
    <ClockCard />
    <CustomColorCard />
   
    </div>
  )
}

export default App
