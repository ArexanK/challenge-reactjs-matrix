import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load product details.", err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        alert("Product deleted", response);
      })
      .catch((err) => {
        alert("Failed to delete product.");
        console.error(err);
      });
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <button onClick={handleDelete}>Delete</button>
        <a href={`/products/edit/${id}`}>Edit</a>
      </div>
    </div>
  );
};

export default ProductDetails;
