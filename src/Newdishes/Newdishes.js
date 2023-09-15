import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Newdishes.css';

const Newdishes = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3010/newdish')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);  
      });
  }, []);

  return (
      <div className="card-container">
        <h1>Upcoming Dishes</h1>
        {items.map(item => (
          <div className="card" key={item.id}>
            <a href="#">
              <img src={item.image} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title1">{item.text}</h5>
            </div>
            <div>
              <h6 className="card-title1">{item.description}</h6>
            </div>
          </div>
        ))}
      </div>
 
  );
}

export default Newdishes;
 
 