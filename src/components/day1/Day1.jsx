import React from 'react';
import CustomColorCard from '../shoe/CustomColorCard';
import Shoe from '../shoe/Shoe';
import ClockCard from './../shoe/ClockCard';
import NikeShoe from './../shoe/NikeShoe';
import ProductCard from './../shoe/ProductCard';
import ShoeCard from './../ShoeCard';

const Day1 = () => {
  return (
    <div>
        <Shoe />
        <CustomColorCard />
        <ClockCard />
        <NikeShoe />
        <ProductCard />
        {/* <ShoeOverLay /> */}
        <ShoeCard />
      
    </div>
  )
}

export default Day1
