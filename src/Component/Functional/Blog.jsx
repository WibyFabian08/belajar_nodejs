import React from "react";
import './CSS/Blog.css';

const Blog = (props) => {
  return (
    <div className='blog-wrap'>
      <img src="https://placeimg.com/640/480/tech" alt="" />

      <div className='keterangan'>
        <p><strong>{props.judul}</strong></p>
        <p style={{fontStyle:"italic", fontSize:'12px'}}>{props.tanggal}</p>
        <p>{props.summary}</p>
      </div>
    </div>
  );
};

export default Blog;
