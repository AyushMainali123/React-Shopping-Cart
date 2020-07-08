import React from "react";
import DisplayProducts from "../components/DisplayProducts";
const Shop = ({ datas }) => {
  return (
    <div className="Shop">
      {datas.length ? (
        <DisplayProducts
          datas={datas}
        />
      ) : (
        "Loading...."
      )}
    </div>
  );
};

export default Shop;
