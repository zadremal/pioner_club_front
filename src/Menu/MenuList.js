import React, { Fragment } from "react";

const MenuList = ({ data }) => {
  return (
    <Fragment>
      {data.map(category => {
        return (
          <div key={category.id}>
            <h1> {category.dish_category}</h1>
            {category.dish.map(dish => {
              return (
                <span key={dish.id}>
                  <h3>{dish.name}</h3>
                  <h6>{dish.consist}</h6>
                  <h6>{dish.price} p</h6>
                </span>
              );
            })}
          </div>
        );
      })}
    </Fragment>
  );
};

export default MenuList;
