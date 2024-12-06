import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
        alert("Product deleted successfully!");
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Product List</h2>
        <button onClick={() => navigate("/products/add")}>
          Add New Product
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <Link to={`/products/${product.id}`}>Show</Link>
                <button
                  onClick={() => navigate(`/products/edit/${product.id}`)}
                >
                  Edit
                </button>
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
