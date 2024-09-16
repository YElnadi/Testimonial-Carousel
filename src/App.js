import testimonials from "./testimonials";
import TestimonialCards from "./TestimonialCarousel/TestimonialCards";
import TestimonialCarousel from "./TestimonialCarousel";
import posts from "./posts";
import PostItem from "./Pagination/PostItem";
import { useState } from "react";

const PAGE_SIZE = 9;
function App() {
  const [pageIdx, setPageIdx] = useState(0);
  const postItems = posts
    .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1))
    .map((post, idx) => <PostItem key={idx} post={post} />);

  const numPages = Math.ceil(posts.length / PAGE_SIZE);
  const buttons = [];
  for(let i = 0; i < numPages; i += 1) {
    buttons.push(
      <button key={i} onClick={() => setPageIdx(i)} className="bg-gray-300 text-white rounded-sm m-1 w-4">{i+1}</button>
    );
  }
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
    <div className="flex flex-col justify-center items-center py-20">
      <div className="w-full max-w-4xl flex justify-center flex-wrap">
        {postItems}
      </div>
      <div>{buttons}</div>
    </div>
  );
}

export default App;
