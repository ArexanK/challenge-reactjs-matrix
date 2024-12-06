import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios
      .post("http://localhost:5001/api/products", formData)
      .then(() => {
        alert("Product added successfully!");
        navigate("/products"); 
      })
      .catch((err) => {
        alert("Failed to add product.");
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Add New Product</h2>
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
          placeholder="image url"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
