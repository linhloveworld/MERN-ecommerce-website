import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import {slider1} from '../../assets/images/slider1.webp'
import {slider2} from '../../assets/images/slider2.webp'
import {slider3} from '../../assets/images/slider3.webp'
import { WrapperTypeProduct } from '../../components/HeaderComponent/style'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { WrapperButtonMore, WrapperProducts } from './style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
const HomePage = () => {
  const arr = ['ABC', 'abc', 'XYZ']
  return (
    <>
      <div style={{ padding:'0 120px' }}>
        <WrapperTypeProduct>
        {arr.map((items)=>{
          return (
            <div>
              <TypeProduct name={items} key={items}/>
            </div>
          )
        })}
        </WrapperTypeProduct>
      </div>
      <div id="container" style={{backgroundColor:
        "#efefef", padding: '0 120px', height:'1000px',width:'100%'}}>
            <SliderComponent  arrImages={[slider1,slider2,slider3]}/>
            <WrapperProducts>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
            </WrapperProducts>
            <div style={{marginTop:'20px',display:'flex',alignItems:'center', justifyContent: 'space-around', gap:'30px',flexWrap:'wrap'}}>
            </div>
            <div style={{width:'100%',display:'flex', justifyContent:'center', marginTop:'10px'}}>
              <WrapperButtonMore 
                  textButton="Xem them"
                  type="outlined" 
                  styleButton={{border: '1px solid rgb(11,116,229)', color: 'rgb(11,116,229)', width: '240px',height:'38px', borderRadius:'4px'}} styleTextButton={{fontWeight:500}}
              />
            </div>
          <NavbarComponent/>  
      </div>
    </>
  )
}

export default HomePage