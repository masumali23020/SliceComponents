import Iphone from "../../components/products/Iphone"
import ClockCard from "../../components/products/shoe/ClockCard"
import CustomColorCard from "../../components/products/shoe/CustomColorCard"
import Ecards from "../../components/products/shoe/E-Card"
import HouseCard from "../../components/products/shoe/HouseCard"
import NikeShoe from "../../components/products/shoe/NikeShoe"
import ProductCard from "../../components/products/shoe/ProductCard"
import Shoe from "../../components/products/shoe/Shoe"
import ShoeOverLay from "../../components/products/shoe/ShoeOverLay"
import UiKit2 from "../../components/products/Uiket2"
import UiKit from "../../components/products/UiKit"



const Products = () => {
  return (
    <div>
        <Shoe />
        <ShoeOverLay />
        <CustomColorCard />
        <ClockCard />
        <NikeShoe />
        <ProductCard />
        
        {/* day 2 */}
        <Iphone />
        <UiKit />
        <UiKit2 />
        
        {/* day 3  */}
       <Ecards />
       <HouseCard />

    </div>
  )
}

export default Products
