import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import axios from "axios";

const Order = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCharacters = async function () {
      const baseURL = "http://localhost:8080/api/order";
      const response = await axios.get(baseURL);
      const data = response.data;
      setData(data);
      console.log("data", data);
    };
    getCharacters();
  }, []);
  return (
    <div className="order-container">
      <div className="order-action-button">
        <button>
          Add Order
          <IoAddCircle />
        </button>
      </div>
      <div className="order-table">
        <table>
          <thead>
            <th>Sno.</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>City</th>
            <th>Message</th>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td>{item.Quantity}</td>
                <td>{item.City}</td>
                <td>{item.Message}</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
