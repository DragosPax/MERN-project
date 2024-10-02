import React, { useEffect, useState } from "react";
import classes from "./foodPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../services/foodService";
import { useCart } from "../../hooks/useCart";
import NotFound from "../../components/NotFound/NotFound";

export default function FoodPage() {
  //setFood is a function to update the state of the food
  const [food, setFood] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(food);
    navigate("/cart");
  };

  useEffect(() => {
    getById(id)
      .then((data) => {
        console.log(data);
        setFood(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {!food ? (
        <NotFound message="Food not found!" linkText="Back to Home Page!" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/foods/${food.imageUrl}`}
            alt={food.name}
          />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div className={classes.rating}>{food.rating}</div>

            <div className={classes.cook_time}>
              <span>
                Time to cook about <strong>{food.cookTime}</strong> minutes
              </span>
            </div>

            <div className={classes.price}>{food.price}</div>

            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
