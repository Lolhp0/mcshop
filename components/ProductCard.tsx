import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = (
    {
        item_name, 
        item_type, 
        item_price, 
        index, 
        item_information, 
        item_description, 
        item_quantity, 
        seller 

    }: any) => {
  return (
    <div
      className="w-[320px] h-[520px] bg-zinc-900/90 p-2 rounded-xl relative"
      data-shop-id={(index + 1) * Math.floor(Math.random() * 999999)}
      key={`${index} - ${item_name}`}
    >
      <div className="w-full h-[50px] p-2">
        <div className="flex">
          <span className="text-3xl">{item_price}</span>
          &nbsp;
          <span className="self-end">
            <Image src="/emerald.png" width={22} height={22} alt="emerald image"/>
          </span>
        </div>
      </div>
      <div className="w-full my-4 flex items-center justify-center">
        <Image
          src={`/${item_type}.png`}
          width={128}
          height={128}
          alt={`Item Type - ${item_type}`}
        />
      </div>
      <div className="w-full h-fit p-4">
        <Link
          href={{
            pathname: "/item",
            query: {
              username: seller,
              item_name: item_name,
              item_description: item_description,
              item_price: item_price,
              item_type: item_type,
              item_quantity: item_quantity,
              item_enchants: item_information.item_enchants.length >= 1 ? item_information.item_enchants.map((v: any) => v) : "null",
              item_used: item_information.item_used,
              item_image: `/${item_type}.png`,
            },
          }}
        >
          <strong className="text-4xl">
            <span>{item_quantity} &nbsp;</span>
            {item_name}
          </strong>
        </Link>
        <p className="text-[18px] text-zinc-700 my-2">{item_description}</p>
        <div className="absolute bottom-3 right-3">
          <div className="w-full h-[32px] flex items-center gap-2">
            <Image
              src={`https://render.crafty.gg/3d/bust/${seller}`}
              width={32}
              height={32}
              className="rounded-full object-contain"
              alt={`${seller}'s Avatar`}
            />
            <span className="text-[14px]">By {seller}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
