import testimonials from "../testimonials";
import TestimonialCards from "./TestimonialCards";
import { useState } from "react";

const TestimonialCarousel = () => {
  const [startIdx, setStartIdx] = useState(0);
  const testimonialscards = testimonials
    .slice(startIdx, startIdx + 3)
    .map((testimonial, idx) => (
      <TestimonialCards testimonial={testimonial} key={idx} />
    ));

  return (
    <div className="flex items-center">
      <button onClick={() => {
        if(startIdx > 0){
            setStartIdx(startIdx -1)
        }
      }}>
        <i className="fa-solid fa-circle-chevron-left text-2xl text-orange-500"></i>
      </button>
      <div className="flex flex-wrap justify-center m-4">
        {testimonialscards}{" "}
      </div>
      <button onClick={() => {
        if(startIdx < testimonials.length -3 ){
            setStartIdx(startIdx + 1)
        }
      }}>
        <i className="fa-solid fa-circle-chevron-right text-2xl text-orange-500"></i>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
