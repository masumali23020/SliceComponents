
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Day1 from './components/day1/Day1'
import Day2 from './components/day2/Day2'
import Navbar from './components/Navber'

function App() {

 

  return (

    <Router>
    <div className="flex">
       
        <div className="flex-1">
            <Navbar />
            <Routes>
                <Route path="/" element={<Day1 />} />
                <Route path="/day2" element={<Day2/>} />
                
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
