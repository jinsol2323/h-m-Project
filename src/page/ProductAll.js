import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {

const productList = useSelector(state => state.product.productList)
const [query,setQuery] = useSearchParams();
const dispatch = useDispatch();

const getProducts=()=>{
  //q의 아이템을 searchQuery에 넣기
  let searchQuery = query.get('q')||"";
  console.log("쿼리값은?",searchQuery)
  
  //미들웨어 사용법
  dispatch(productAction.getProducts(searchQuery));
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
