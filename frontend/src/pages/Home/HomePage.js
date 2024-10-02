import React, { useReducer, useEffect } from "react";
import { getAll } from "../../services/foodService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import NotFound from "../../components/NotFound/NotFound";

const initialState = { foods: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};
export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;

  useEffect(() => {
    getAll().then((foods) =>
      dispatch({ type: "FOODS_LOADED", payload: foods })
    );
  }, []);

  return (
    <>
      {foods.length === 0 && <NotFound />}
      <Thumbnails foods={foods} />
    </>
  );
}
