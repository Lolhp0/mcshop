import { useSkin } from "@/hooks/useSkin";
import { hagopH } from "@/profiles/hagoph";
import { hagopM } from "@/profiles/hagopm";
import { hragY } from "@/profiles/hrag";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div className="w-full h-fit" id="shop">
      <div className="w-full h-fit flex flex-wrap gap-4 p-4">
        {hagopH.shop.map((v, i) => (
          <ProductCard
            item_name={v.item_name}
            item_description={v.item_description}
            index={i}
            item_type={v.item_type}
            item_information={v.item_information}
            item_quantity={v.item_quantity}
            seller={hagopH.profile.name}
            item_price={v.item_price}
          />
        ))}
        {hagopM.shop.map((v, i) => (
          <ProductCard
            item_name={v.item_name}
            item_description={v.item_description}
            index={i}
            item_type={v.item_type}
            item_information={v.item_information}
            item_quantity={v.item_quantity}
            seller={hagopM.profile.name}
            item_price={v.item_price}
          />
        ))}
        {hragY.shop.map((v, i) => (
          <ProductCard
            item_name={v.item_name}
            item_description={v.item_description}
            index={i}
            item_type={v.item_type}
            item_information={v.item_information}
            item_quantity={v.item_quantity}
            seller={hragY.profile.name}
            item_price={v.item_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
