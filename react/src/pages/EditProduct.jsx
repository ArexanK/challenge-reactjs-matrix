import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((err) => {
        alert("Failed to fetch product.");
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios
      .put(`http://localhost:5000/api/products/${id}`, formData)
      .then(() => {
        alert("Product updated successfully!");
        navigate("/products"); 
      })
      .catch((err) => {
        alert("Failed to update product.");
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
