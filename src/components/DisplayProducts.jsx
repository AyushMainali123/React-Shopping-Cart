import React from 'react'
import Product from './Product';

const DisplayProducts = ({ datas }) => {
  return (
    <div className="DisplayProducts">
      {datas.map((data) => (
        <Product
          data={data}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default DisplayProducts
