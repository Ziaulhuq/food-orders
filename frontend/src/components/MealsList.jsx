import React from "react";

const MealsList = ({ meal }) => {
  return (
    <>
      <li className="bg-[#1d1a16] rounded-[2xl] overflow-hidden text-center">
        <article className="flex flex-col justify-between ">
          <img
            src={`http://localhost:3000/${meal.image}`}
            className="w-full h-80 object-cover"
          />
        </article>
        <div className="z-99">
          <h3 className="text-[1.5rem] font-bold mx-3 my-0">{meal.name}</h3>
          <p className="inline-block bg-[#312c1d] text-[#ffc404] text-[0.9rem] font-bold px-2 py-2 m-0 rounded-sm">
            {meal.price}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
      </li>
    </>
  );
};

export default MealsList;
