import testimonials from "../testimonials";
import TestimonialCards from "./TestimonialCards";
import {useState} from 'react'

const TestimonialCarousel = () => {
    const [startIdx, setStartIdx] = useState(0)
  const testimonialscards = testimonials.slice(startIdx,startIdx+3).map((testimonial, idx) => (
    <TestimonialCards testimonial={testimonial} key={idx}/>
  ));

  return <div className="flex m-4">{testimonialscards} </div>;
};

export default TestimonialCarousel;
