import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {

const [productList, setProductList] = useState([]);
const [query,setQuery] = useSearchParams();

const getProducts= async()=>{
  //q의 아이템을 searchQuery에 넣기
  let searchQuery = query.get('q')||"";
  console.log("쿼리값은?",searchQuery)

  let url=`https://my-json-server.typicode.com/jinsol2323/hnm-Project/products?q=${searchQuery}`;
  let response = await fetch(url);
  let data = await response.json();
  setProductList(data);
}

useEffect(()=>{
  getProducts();
},[query])

  return (
    <div>
      <Container>
        <Row>
        {productList.map((item)=>(
          <Col lg={3}>
            <ProductCard item={item}/>
          </Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll