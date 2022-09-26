import React, { useEffect } from 'react'
import { Col, Container,Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { proDetailAction } from '../redux/actions/proDetailAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const ProductDetail = () => {

  let{id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.proDetail.productDetailList)

  const getProdutDetail= async()=>{

    dispatch(proDetailAction.getProDetail(id));
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