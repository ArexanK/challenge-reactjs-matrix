import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <a href="#" className="buy-btn">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
