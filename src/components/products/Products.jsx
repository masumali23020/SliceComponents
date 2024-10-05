
import Iphone from './Iphone';
import ClockCard from './shoe/ClockCard';
import CustomColorCard from './shoe/CustomColorCard';
import NikeShoe from './shoe/NikeShoe';
import ProductCard from './shoe/ProductCard';
import Shoe from './shoe/Shoe';
import ShoeOverLay from './shoe/ShoeOverLay';
import WCard from './shoe/W-Card';
import ShoeCard from './ShoeCard';
import TeamCard from './TeamCard';
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
        <TeamCard />

        {/* day 3  */}
        <WCard />
      
    </div>
  )
}

export default Products
