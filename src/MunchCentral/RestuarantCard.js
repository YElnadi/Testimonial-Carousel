import React from "react";

const RestuarantCard = (props) => {
  const { restuarant } = props;
  console.log(restuarant);

  // console.log("kkkkk", 2 * "*");

  return (
    <div className=" m-4 border border-zinc-200 shadow-md relative">
      {
        restuarant.promotion &&  <div className="bg-red-600 text-white py-1 px-4 absolute top-4 rounded-r-full">Promotion</div>
      }
     
      <img src={restuarant.image} className="w-64 h-64 object-cover" />

      <div className="flex flex-col p-2">
        <div className="flex  justify-between ">
          <div className="font-bold text-xl mb-2">{restuarant.name}</div>

          <div className="text-red-500">
            {" "}
            <i className="fa-solid fa-star mr-1"></i>
            {restuarant.rating}
          </div>
        </div>

        <div className="text-l text-neutral-500">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {restuarant.location}
        </div>
        <div className="text-neutral-500">{"$".repeat(restuarant.cost)}</div>
      </div>
    </div>
  );
};

export default RestuarantCard;
