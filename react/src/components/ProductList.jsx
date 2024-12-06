import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) =>
        console.error("There was an error fetching the products!", error)
      );
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== id));
        console.log("Product deleted:", response.data);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleShow = (id) => {
    console.log(`Show product with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Show product with id: ${id}`);
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <Link to="/add-product" className="add-product-link">
        Add New Product
      </Link>

      <table className="products-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => handleShow(product.id)}>Show</button>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
