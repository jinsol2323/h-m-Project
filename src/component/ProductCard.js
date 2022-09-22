import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({item}) => {

    const navigate = useNavigate();
    const showDetail=()=>{
        navigate(`/product/${item.id}`);
    }

  return (
    <div>
        <div className='imgCardBox' onClick={showDetail}>
            <img src={item?.img} className='imgCard'/>
        </div>
        <div>{item?.choice==true?"Conscious choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new==true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard