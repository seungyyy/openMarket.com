import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Item({ image, seller, price }) {
  return (
    <div>
      <img src={image} />
      <h2>{price}</h2>
      <p>{seller}</p>
    </div>
  );
}

function Home() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const setData = async ()=>{
      const res = await axios.get('http://3.38.108.122:8000/products/');
      const data = await res.data;
      setItems(data.results)
    }
    setData()
  }, [])
  
  return (
    <>
    {items.map((item, idx)=><Item {...item} key={idx}/>)}
    </>
  );
}



export default Home;
