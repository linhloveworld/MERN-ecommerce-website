import React from 'react'
import {Card} from 'antd';
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style';
import {StarFilled} from '@ant-design/icons';
import logo from '../../assets/images/logo.png'

const CardComponent = () => {
  return (
    <Card 
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        bodyStyle={{padding:'10px'}}
        style={{ width:200 }}
        cover={
          <img alt='example' src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
        }>
          <img
           src={logo} 
           style={{
            width:'68px', height: '14px', position: 'absolute', top: 1, left: 1, borderTopLeftRadius: '3px' 
            }}/>
          <StyleNameProduct>Hello</StyleNameProduct>
          <WrapperReportText>
            <span style={{marginRight: '4px'}}>
              <span>Ten san pham</span>
              <StarFilled style={{fontSize:'10px',color:'yellow'}}/>
            </span>
            <span>Trang thai san pham</span>
              <WrapperPriceText>
                Gia ban san pham
                <WrapperDiscountText>Sale gia san pham</WrapperDiscountText>
              </WrapperPriceText>
            </WrapperReportText>
    </Card>
  );
}

export default CardComponent