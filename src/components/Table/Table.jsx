import { useState, useEffect } from "react";
import "./Table.css";
import axios from 'axios';

const Table = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd', // specify the currency you want to use
          }
        });
        setData(response.data);
      } catch {
        console.log('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-outer container">
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{width: "10%"}}>#</th>
            <th style={{width: "20%"}}>Coin</th>
            <th>Price</th>
            <th>24H Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.market_cap_rank}</td>
              <td style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <img src={item.image} alt={item.id} width="20" height="20"/>
                {item.name}
              </td>
              <td>${item.current_price.toLocaleString()}</td>
              <td>{item.price_change_percentage_24h.toFixed(2)}%</td>
              <td>${item.market_cap.toLocaleString()}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
