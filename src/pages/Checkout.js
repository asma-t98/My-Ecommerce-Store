
import React from 'react';

const Checkout = () => {
  return (
    <div className="container">
      <h2>Checkout</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
