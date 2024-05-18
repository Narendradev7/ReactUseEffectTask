import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UseEffect1.css"; 

const UseEffect1 = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [eachTodo, setEachTodo] = useState({});
    
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        document.title = `Count ${count}`;
        fetchEachTodo();
    }, [count]);

    const fetchData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        if (result.status === 200) {
            setTodos(result.data);
        }
    };

    const fetchEachTodo = async () => {
        if (count >= 0 && count < todos.length) {
            const result = await axios.get(
                `https://fakestoreapi.com/products/${count + 1}`
            );
            if (result.status === 200) {
                setEachTodo(result.data);
            }
        }
    };

    const handleButtonClick = (index) => {
        setCount(index);
    };

    return (
        <div className="container">
            <h2 className="title">Use Effect example</h2>
            {/* Display buttons for each product */}
            <div className="button-container">
                {todos.map((todo, index) => (
                    <button key={index} className="button" onClick={() => handleButtonClick(index)}>
                        Product {index + 1}
                    </button>
                ))}
            </div>

            {Object.keys(eachTodo).length > 0 ? (
                <div className="product-details">
                    <h3>ID: {eachTodo.id}</h3>
                    <h3>TITLE: {eachTodo.title}</h3>
                    <h3>PRICE: {eachTodo.price}</h3>
                    <h3>DESCRIPTION: {eachTodo.description}</h3>
                </div>
            ) : (
                <h4 className="no-data">No data</h4>
            )}

        </div>
    );
};

export default UseEffect1;
