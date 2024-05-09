import axios from "axios";
import React, { Component } from "react";
import Card from "../../../Functionality/card/card";

class Mounting extends Component {
  state = {
    message: "React App",
    products: [],
    color: "red",
    categories: [],
    loading: false,
  };

  componentDidMount() {
    document.title = this.state.message;
    this.fetchData();
    this.fetchCategories();
  }

  fetchData = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        this.setState({ products: response.data, loading: false });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  fetchCategories = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/categories");
      const newResponse = [...data, "All"];
      this.setState({ categories: newResponse });
    } catch (err) {
      console.log(err);
    }
  };

  filterButton = async (selected) => {
    try {
      this.setState({ loading: true });
      if (selected === "All") {
        await this.fetchData();
      } else {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${selected}`);
        this.setState({ products: response.data, loading: false });
      }
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  handleAddProduct = async (newProduct) => {
    try {
      this.setState({ loading: true });
      const response = await axios.post("https://fakestoreapi.com/products", newProduct);
      if (response.status === 201) {
        this.setState(prevState => ({
          products: [...prevState.products, response.data],
          loading: false
        }));
      } else {
        alert("Failed to add product");
        this.setState({ loading: false });
      }
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  handleUpdateProduct = async (productId, updatedProduct) => {
    try {
      this.setState({ loading: true });
      const response = await axios.put(`https://fakestoreapi.com/products/${productId}`, updatedProduct);
      if (response.status === 200) {
        const updatedProducts = this.state.products.map(product =>
          product.id === productId ? response.data : product
        );
        this.setState({ products: updatedProducts, loading: false });
      } else {
        alert("Failed to update product");
        this.setState({ loading: false });
      }
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  handleDeleteProduct = async (productId) => {
    try {
      this.setState({ loading: true });
      const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
      if (response.status === 200) {
        const updatedProducts = this.state.products.filter(product => product.id !== productId);
        this.setState({ products: updatedProducts, loading: false });
      } else {
        alert("Failed to delete product");
        this.setState({ loading: false });
      }
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>Mounting phase</h1>
        {this.state.categories.length > 0 &&
          this.state.categories.map((each, index) => (
            <button key={index} onClick={() => this.filterButton(each)}>
              {each}
            </button>
          ))}
        <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
          {!this.state.loading ? (
            this.state.products.map((eachProduct, index) => (
              <Card key={index} product={eachProduct} />
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </div>
        {/* Example usage of handleAddProduct, handleUpdateProduct, handleDeleteProduct */}
        <button onClick={() => this.handleAddProduct({ /* New Product Data */ })}>Add Product</button>
        <button onClick={() => this.handleUpdateProduct(/* Pass Product ID */ { /* Updated Product Data */ })}>Update Product</button>
        <button onClick={() => this.handleDeleteProduct(/* Pass Product ID */)}>Delete Product</button>
      </>
    );
  }
}

export default Mounting;
