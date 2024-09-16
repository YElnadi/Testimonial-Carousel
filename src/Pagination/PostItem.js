import React from 'react';

const PostItem = (props) => {
    const {post} = props
    console.log(post)
  return (
    <div className="m-4 relative shadow-xl ">
      <img src={post.image} className=" w-64 h-64 object-cover rounded-lg"/>
      <div className="absolute top-0 right-0 m-2 bg-gray-800/70 text-white rounded-full px-2">
      <i className="fa-regular fa-heart text-rose-300 mr-1"></i>
        {post.likes}</div>
    </div>
  );
}

export default PostItem;
