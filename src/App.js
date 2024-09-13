import testimonials from "./testimonials";
import TestimonialCards from "./TestimonialCards";

function App() {
  const testimonialsDetails = testimonials.map((testimonial, idx) => (
    <TestimonialCards key={idx} testimonial={testimonial} />
  ));
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <div className="text-3xl text-neutral-600 border-b-4 border-orange-400 p-4">Customer's Love AL's Autos</div>
      {testimonialsDetails}
      </div>
    </div>
  );
}

export default App;
