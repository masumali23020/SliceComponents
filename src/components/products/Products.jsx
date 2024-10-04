
import Iphone from './Iphone';
import ClockCard from './shoe/ClockCard';
import CustomColorCard from './shoe/CustomColorCard';
import NikeShoe from './shoe/NikeShoe';
import ProductCard from './shoe/ProductCard';
import Shoe from './shoe/Shoe';
import ShoeCard from './ShoeCard';
import TeamCard from './TeamCard';
import UiKit from './UiKit';

const Products = () => {
  return (
    <div>
        <Shoe />
        <CustomColorCard />
        <ClockCard />
        <NikeShoe />
        <ProductCard />
        {/* <ShoeOverLay /> */}
        <ShoeCard />

        {/* day 2 */}
        <Iphone />
        <UiKit />
        <TeamCard />
      
    </div>
  )
}

export default Products
