import React from 'react';
import './Cards.css';

interface CardProps {
    title: string;
    description: string;
    imgUrl: string;
}

const Cards = ({title, description, imgUrl}: CardProps) => {
  return (
    <div>
        <article className="card">
  <div className="card-img">
    <div className="card-imgs pv delete">
        <img src={imgUrl} alt={title} />
    </div>
  </div>

  <div className="project-info">
    <div className="flex">
      <div className="project-title">{title}</div>
      {/* <span className="tag">type</span> */}
    </div>
    <span className="lighter"
      >{description}</span
    >
  </div>
</article>
    </div>
  );
};

export default Cards;