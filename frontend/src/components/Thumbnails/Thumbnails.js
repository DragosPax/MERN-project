import React from "react";
import classes from "./thumbnails.module.css";
import { Link } from "react-router-dom";

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                &hearts;
              </span>
              <div className={classes.stars}>{food.stars}/5</div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map((origin) => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
                <div className={classes.cook_time}>{food.cook_time}</div>
              </div>
              <div className={classes.price}>{food.price}$</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
