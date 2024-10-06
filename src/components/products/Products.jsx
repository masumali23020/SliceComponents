
import Iphone from './Iphone';
import ClockCard from './shoe/ClockCard';
import CustomColorCard from './shoe/CustomColorCard';
import Ecards from './shoe/E-Card';
import HouseCard from './shoe/HouseCard';
import NikeShoe from './shoe/NikeShoe';
import ProductCard from './shoe/ProductCard';
import Shoe from './shoe/Shoe';
import ShoeOverLay from './shoe/ShoeOverLay';
import ShoeCard from './ShoeCard';
import UiKit from './UiKit';

const Products = () => {
  return (
    <div>
        <Shoe />
        <ShoeOverLay />
        <CustomColorCard />
        <ClockCard />
        <NikeShoe />
        <ProductCard />
        <ShoeCard />

        {/* day 2 */}
        <Iphone />
        <UiKit />
        

        {/* day 3  */}
       <Ecards />

       <HouseCard />
      
    </div>
  )
}

export default Products
