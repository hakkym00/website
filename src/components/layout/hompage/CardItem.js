import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <React.Fragment>
      <li className="cards__item">
        <Link className="cards __item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Hotel" className="cards__item__img" />
          </figure>
          <div className="cards__items__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default CardItem;