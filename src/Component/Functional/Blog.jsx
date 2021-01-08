import React from "react";
import './CSS/Blog.css';

const Blog = (props) => {
  return (
    <div className='blog-wrap'>
      <img src="https://placeimg.com/640/480/tech" alt="" />

      <div className='keterangan'>
        <p>{props.tanggal}</p>
        <p><strong>{props.judul}</strong></p>
        <p>{props.summary}</p>
      </div>
    </div>
  );
};

export default Blog;
