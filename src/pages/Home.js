import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
    { id: 1, name: "Rose Body Lotion", price: "$15", description: "A moisturizing body lotion with a floral scent.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf839aeda/hires/026737060.jpg?sh=471" },
    { id: 2, name: "Lavender Candle", price: "$12", description: "A calming candle with lavender fragrance.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw99f7f2c0/hires/028009458.jpg?sh=471" },
    { id: 3, name: "Shea Butter Cream", price: "$18", description: "A rich cream made with natural shea butter.", imageUrl: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5adb88f8/hires/028000253.jpg?sh=471" },
  ];

function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to Bath & Body Store</h1>
        <p>Discover our range of skincare and body products!</p>
      </header>
      
      <section style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <Link to={`/products/${product.id}`} style={styles.productLink}>
                <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </Link>
              <button style={styles.button}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    marginBottom: '50px',
    color: '#333',
  },
  featuredSection: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '20px',
  },
  productsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  productCard: {
    width: '300px',
    padding: '15px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  productLink: {
    textDecoration: 'none',
    color: '#333',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
