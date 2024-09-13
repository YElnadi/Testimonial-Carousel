import React from "react";

const TestimonialCards = (props) => {
  const { testimonial } = props;
  console.log(testimonial);
  return (
    <div>
      <img src={testimonial.portrait} className="w-20 h-20" />
    </div>
  );
};

export default TestimonialCards;
