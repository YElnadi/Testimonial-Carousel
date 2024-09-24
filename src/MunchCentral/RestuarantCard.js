import React from "react";

const RestuarantCard = (props) => {
  const { restuarant } = props;
  console.log(restuarant);

  console.log("kkkkk", 2 * "*");

  return (
    <div className=" m-4 border border-zinc-200">
      <img src={restuarant.image} className="w-64 h-64 object-cover" />
      <div className="flex flex-col p-2">
        <div className="flex  justify-between ">
          <div>{restuarant.name}</div>
         
          <div className="text-red-500"> <i className="fa-solid fa-star mr-1"></i>{restuarant.rating}</div>
        </div>

        <div className="text-xl color-zing-500">{restuarant.location}</div>
        <div>{"$".repeat(restuarant.cost)}</div>
        hello world
      </div>
    </div>
  );
};

export default RestuarantCard;
