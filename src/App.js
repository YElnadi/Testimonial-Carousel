import testimonials from "./testimonials";
import TestimonialCards from "./TestimonialCarousel/TestimonialCards";
import TestimonialCarousel from './TestimonialCarousel'

function App() {
  
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <div className="text-3xl text-neutral-600 border-b-4 border-orange-400 p-4 flex justify-center">
          Customer's Love AL's Autos
        </div>
        <TestimonialCarousel/>
      </div>
    </div>
  );
}

export default App;
