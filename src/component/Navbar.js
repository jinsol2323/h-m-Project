import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
  
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성']

  const navigate = useNavigate()

  const goToMain=()=>{
    navigate('/');
  }

  const search=(event)=>{
    if(event.key==="Enter"){
      //입력한 검색어를 읽어오기
      let keyword = event.target.value;
      console.log("keyword=",keyword)

      //navigate() 함수 이용하여 url 바꿔주기
      navigate(`/?q=${keyword}`)
    }
  }
  
  return (
    <div>
        <div>
            <div className='loginButton'>
            {authenticate ? (
                              <div onClick={() => setAuthenticate(false)}>
                                  <FontAwesomeIcon icon={faUser} />
                                  <span>로그아웃</span>
                                </div>
                              ) : (
                                <div onClick={() => navigate("/login")}>
                                  <FontAwesomeIcon icon={faUser} />
                                  <span>로그인</span>
                                </div>
                              )}
            </div>
        </div>

        <div className='navSection' onClick={goToMain}>
          <img width={150}src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png'/>
        </div>

        <div className='menuArea'>
            <ul className='manuList'>
              {menuList.map(menu=><li>{menu}</li>)}
            </ul>
          <div className='searchBox'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type='text' className='searchtext' onKeyPress={(event)=>search(event)}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar