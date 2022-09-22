import React, { useEffect, useState } from 'react'
import { Col, Container,Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDetail = () => {

  let{id} = useParams();
  const [product, setProduct] = useState(null);

  const getProdutDetail= async()=>{

    let url = `https://my-json-server.typicode.com/jinsol2323/hnm-Project/products/${id}`
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  }

  useEffect(()=>{
    getProdutDetail();
  },[]);


  return (
    <Container> 
      <Row>
        <Col className='productImg'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div className='titleTextStyle'>{product?.title}</div>
          <div className='priceTextStyle'>₩ {product?.price}</div>
          <div>{product?.choice==true?"Conscious choice":""}</div>
          <Dropdown>
            <Dropdown.Toggle className='DetailDropdown' id="dropdown-basic">
              Size Select
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Blue</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Black</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Green</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button className='addbuttonStyle' variant="dark">추가</Button> 
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail