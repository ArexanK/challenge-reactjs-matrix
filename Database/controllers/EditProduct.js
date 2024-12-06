import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/products/${id}`, product)
      .then((response) => {
        console.log("Product updated:", response.data);
        navigate("/products");
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <input
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
