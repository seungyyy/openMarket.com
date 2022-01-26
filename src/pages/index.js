import React, { useState, useEffect } from 'react';
import { ProdItemCard } from '../components/ProdItemCard';
import { Layout } from '../components/layouts/Layout';
import axios from 'axios';
import styled from '@emotion/styled/';
import { ImgCarousel } from '../components/ImgCarousel'

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
    <Layout>
      <ImgCarousel />
      <Ul>
        {items.map((item) => (
          <ProdItemCard {...item} key={item.product_id} />
        ))}
      </Ul>
    </Layout>
  );
}


const Ul = styled.ul`
  max-width: 1280px;
  display: grid;
  gap: 7.25vh 3.64vw;
  grid-template-columns: repeat(3, 1fr);
  padding: 5em 16.66vw 11.25em;
`;


export default Home;
