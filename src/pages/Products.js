// Products.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const productsData = [
    { id: 1, name: "Rose Body Lotion", price: "$15", description: "A moisturizing body lotion with a floral scent.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf839aeda/hires/026737060.jpg?sh=471" },
    { id: 2, name: "Lavender Candle", price: "$12", description: "A calming candle with lavender fragrance.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw99f7f2c0/hires/028009458.jpg?sh=471" },
    { id: 3, name: "Shea Butter Cream", price: "$18", description: "A rich cream made with natural shea butter.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5adb88f8/hires/028000253.jpg?sh=471" },
  ];

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="text-center my-4">Products</h2>
      <div className="row">
        {productsData.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card border-primary">
              <Link to={`/products/${product.id}`}>
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </Link>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>إضافة إلى العربة</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
