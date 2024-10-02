import React from "react";
import { useCart } from "../../hooks/useCart";
import classes from "./cartPage.module.css";
import { Link } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();
  return (
    <>
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>CART</h1>
      {cart.items.length === 0 ? (
        <NotFound />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map((item) => (
              <li key={item.food.id}>
                <div>
                  <img
                    src={`/foods/${item.food.imageUrl}`}
                    alt={item.food.name}
                  />
                </div>
                <div>
                  <Link to={`/food/${item.food.id}`}>{item.food.name} </Link>
                </div>
                <div>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      changeQuantity(item, Number(e.target.value))
                    }
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div>{item.price} $</div>
                <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromCart(item.food.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={classes.checkout}>
            <div>
              <div className={classes.foods_count}>{cart.totalCount}</div>
              <div className={classes.totalPrice}>{cart.totalPrice}$</div>
            </div>

            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </>
  );
}
