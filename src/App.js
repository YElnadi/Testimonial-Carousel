import testimonials from "./testimonials";
import TestimonialCards from "./TestimonialCarousel/TestimonialCards";
import TestimonialCarousel from "./TestimonialCarousel";
import posts from "./posts";
import PostItem from "./Pagination/PostItem";
import restuarants from "./resturants";
import RestuarantCard from "./MunchCentral/RestuarantCard";
import { useState } from "react";

const PAGE_SIZE = 9;
function App() {
  const [pageIdx, setPageIdx] = useState(0);
  const postItems = posts
    .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1))
    .map((post, idx) => <PostItem key={idx} post={post} />);

  const numPages = Math.ceil(posts.length / PAGE_SIZE);
  const buttons = [];
  for (let i = 0; i < numPages; i += 1) {
    buttons.push(
      <button
        key={i}
        onClick={() => setPageIdx(i)}
        className="bg-gray-300 text-white rounded-sm m-1 w-4"
      >
        {i + 1}
      </button>
    );
  }

  const resturantsDetails = restuarants.map((restuarant, idx) => (
    <RestuarantCard key={idx} restuarant={restuarant} />
  ));
  return (
    //testmonial carousel app
    // <div className="flex justify-center">
    //   <div className="w-full max-w-5xl flex flex-col items-center">
    //     <div className="text-3xl text-neutral-600 border-b-4 border-orange-400 p-4 flex justify-center">
    //       Customer's Love AL's Autos
    //     </div>
    //     <TestimonialCarousel/>
    //   </div>
    // </div>

    //pagination
    // <div className="flex flex-col justify-center items-center py-20">
    //   <div className="w-full max-w-4xl flex justify-center flex-wrap">
    //     {postItems}
    //   </div>
    //   <div>{buttons}</div>
    // </div>

    //Munch central
    <div className="flex flex-col items-center border-8 border-red-500 ">
      <div className="flex text-3xl m-6 items-center px-2">
        <img src="https://static-task-assets.react-formula.com/996965.png" className="w-16 m-2" />
        Munch Central
      </div>

      <div className="flex justify-center border-8 border-black w-full max-w-4xl flex-wrap ">
        {resturantsDetails}
      </div>
    </div>
  );
}

export default App;
