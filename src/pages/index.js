import React, { useState, useEffect } from 'react';
import { ProdItemCard } from '../components/ProdItemCard';
import axios from 'axios';
import styled from '@emotion/styled/';


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
    <Ul>
    {items.map((item)=><ProdItemCard {...item} key={item.product_id}/>)}
    </Ul>
  );
}


const Ul = styled.ul`
  display: grid;
  gap: 4.875rem 4.375rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 16.66vw;
`;


export default Home;
