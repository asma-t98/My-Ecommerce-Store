import React from 'react';
import { useParams } from 'react-router-dom';

const productsData = [
  { id: 1, name: "Rose Body Lotion", price: "$15", description: "A moisturizing body lotion with a floral scent.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf839aeda/hires/026737060.jpg?sh=471" },
  { id: 2, name: "Lavender Candle", price: "$12", description: "A calming candle with lavender fragrance.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw99f7f2c0/hires/028009458.jpg?sh=471" },
  { id: 3, name: "Shea Butter Cream", price: "$18", description: "A rich cream made with natural shea butter.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5adb88f8/hires/028000253.jpg?sh=471" },
];

function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  image: {
    width: '150px',
    height: 'auto',
  },
};

export default ProductDetails;