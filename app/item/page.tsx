import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = ({ searchParams }: any) => {
  const keys = [
    {
      key: "price",
      value: searchParams.item_price + " Emeralds",
    },
    {
      key: "quantity",
      value: searchParams.item_quantity,
    },
    {
      key: "type",
      value: searchParams.item_type,
    },
    {
      key: "used",
      value: searchParams.item_used === "false" ? "no" : "yes",
    },
    {
      key: "enchants",
      value:
        searchParams.item_enchants === "null"
          ? "no enchants"
          : searchParams.item_enchants.join(", "),
    },
  ];

  return (
    <main>
      <Link href="/" className="absolute top-2 left-2 font-bold underline">
        Back Home
      </Link>

      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-[90%] h-[520px] mx-auto flex justify-center gap-[5rem] max-md:flex-col max-md:items-center max-md:h-fit">
          <div className="w-fit h-[inherit] flex items-center justify-center max-md:h-fit">
            <Image
              src={searchParams.item_image}
              width={250}
              height={250}
              alt={`${searchParams.item_name} Image`}
            />
          </div>
          <div className="w-[40%] h-[inherit] max-md:px-8 max-md:w-full">
            <div className="w-full h-[inherit] flex justify-center flex-col p-4">
              <h1 className="text-4xl font-bold">{searchParams.item_name}</h1>
              <h2 className="text-xl text-zinc-400 font-medium">
                {searchParams.item_description}
              </h2>
              <div className="w-full h-[32px] flex items-center justify-end gap-2">
                <Image
                  src={`https://render.crafty.gg/3d/bust/${searchParams.username}`}
                  width={32}
                  height={32}
                  className="rounded-full object-contain"
                  alt={`${searchParams.username}'s Avatar`}
                />
                <span className="text-[14px]">By {searchParams.username}</span>
              </div>
              <div className="my-5">
                {keys.map((v) => (
                  <div className="w-full flex justify-between items-center my-2 gap-2 border-b-[1px] border-b-zinc-500">
                    <span>{v.key}:</span>
                    <span>{v.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

// "use client";

// import React from 'react';
// import { players } from '@/constants';

// const Page = ({ searchParams }: any) => {

//   // Function to find a user by username
//   const findUserByUsername = (username: string) => {
//     const user = players.find((person) => person.name === username);
//     return user ? user.name : "Oops, no results";
//   };

//   // Get the username from searchParams or from router query
//   const username = searchParams?.username || '';

//   return <div>{findUserByUsername(username)}</div>;
// };

// export default Page;
