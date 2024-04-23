import React from 'react';
import './Article.scss';

export const Article = ({ title, date, text }) => (
  <article className="Article">
    <h1 className="Article__title">{title}</h1>
    <span className="Article__date">{date}</span>
    <p className="Article__text">{text}</p>
  </article>
);
