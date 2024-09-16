import React from "react";

const TestimonialCards = (props) => {
  const { testimonial } = props;
  console.log(testimonial);
  return (
    <div className="flex flex-col w-64 m-2 ">
      <div className="flex flex-col bg-gradient-to-r from-orange-400 to-red-500 items-center rounded-t-lg">
        <img src={testimonial.portrait} className="w-24" />
        <div className="text-white text-xl">{testimonial.name}</div>
      </div>
      <div className="flex flex-col items-center border border-neutral-300 px-4 py-6 rounded-b-lg">
        <div>
          <div>
            {testimonial.rating}
            <i className="fa-solid fa-star text-yellow-400 ml-1"></i>
          </div>
        </div>

        <div className="text-neutral-600 leading-relaxed">
          {testimonial.text}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
