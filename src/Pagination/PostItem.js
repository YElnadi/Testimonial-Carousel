import React from 'react';

const PostItem = (props) => {
    const {post} = props
    console.log(post)
  return (
    <div>
      <img src={post.image} className=" w-64 h-64 object-cover m-4 rounded-lg"/>
    </div>
  );
}

export default PostItem;
