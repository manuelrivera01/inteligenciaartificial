import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text, url }) => (
  <div className='gpt3__blog-container_article'>
    <div className='gpt3__blog-container_article-image'>
      <a href={url} target='_blank'>
        <img src={imgUrl} alt='blog_image' />
      </a>
    </div>
    <div className='gpt3__blog-container_article-content'>
      <div>
        <p>{date}</p>
        <a href={url} target='_blank'>
          <h3>{text}</h3>
        </a>
        <a />
      </div>
      <a href={url} target='_blank'>
        <p>Leer Más</p>
      </a>
    </div>
  </div>
);

export default Article;
