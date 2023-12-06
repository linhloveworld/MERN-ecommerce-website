import { Col, Row, Image, InputNumber, Button } from 'antd'
import React from 'react'
import ImageProduct from '../../assets/images/'
import ImageProductSmall from '../../assets/images/'
import { WrapperPriceProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct,WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperBtnQualityProduct } from './style'
import { WrapperProducts } from '../../pages/HomePage/style'
import { MinusOutlined, PlusOutlined, SearchOutlined, StarFilled } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
  const onChange = () => {}
  return (
    <Row style={{padding:'16px',backgroundColor:'#ffff', borderRadius:'4px'}}>
      <Col span={10} style={{borderRight:'1px solid #e5e5e5',paddingRight:'8px'}}>
        <Image src={ImageProduct} alt='image product' preview={false}/>
        <Row style={{paddingTop:'10px', justifyContent:'space-between'}}> 
          <WrapperStyleColImage span={4}>
          <WrapperStyleImageSmall src={ImageProductSmall} alt='image product' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
          <WrapperStyleImageSmall src={ImageProductSmall} alt='image product' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
          <WrapperStyleImageSmall src={ImageProductSmall} alt='image product' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
          <WrapperStyleImageSmall src={ImageProductSmall} alt='image product' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
          <WrapperStyleImageSmall src={ImageProductSmall} alt='image product' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
          <WrapperStyleImageSmall src={ImageProductSmall} alt='image product' preview={false}/>
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStyleNameProduct>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, iusto harum enim iste blanditiis corrupti optio repudiandae magnam natus eius necessitatibus asperiores adipisci nesciunt maiores architecto earum temporibus quia debitis.</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54'}}/>
          <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54'}}/>
          <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54'}}/>
          <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54'}}/>
          <StarFilled style={{fontSize:'12px',color:'rgb(253,216,54'}}/>
          <WrapperStyleTextSale>|| Da ban 1000++</WrapperStyleTextSale>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200,000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos quis veniam dignissimos quidem doloribus corporis enim modi officia tempore dolores explicabo, omnis alias consequatur placeat sint accusamus! Facilis, expedita.</span>
          <span className="address">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero sint, nam iusto ducimus nihil asperiores sequi nostrum numquam harum magni culpa veritatis consequuntur maiores nesciunt? Quo, explicabo? Qui, ad!</span>
          <span className="changeAddress">Doi dia chi</span>
        </WrapperAddressProduct>
        <div style={{margin:'10px 0 20px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
          <div style={{marginBottom:'10px'}}>So luong</div>
          <WrapperQualityProduct>
            <Button style={{border:'none', background:'transparent'}}>
              <MinusOutlined style={{color:'#0000', fontSize:'20px'}} size="10"/>
            </Button>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} size='small'/>
            <Button style={{border:'none', background:'transparent'}}>
              <PlusOutlined style={{color:'#0000', fontSize:'20px'}} size="10"/>
            </Button>
          </WrapperQualityProduct>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
          <ButtonComponent
            bordered={false}
            size={20}
            styleButton={{
              background:'rgb(255,57,69)',
              height:'48px',
              width:'220px',
              border:'none',
              borderRadius: '4px'
            }}
            textButton={'Chon mua'}
            styleTextButton={{color:'#ffff', fontSize:'15px',fontWeight:'700'}}
          />
          <ButtonComponent
            bordered={false}
            size={20}
            styleButton={{
              background:'#ffff',
              height:'48px',
              width:'220px',
              border:'1px solid rgb(13,92,182)',
              borderRadius: '4px'
            }}
            textButton={'Mua truoc tra sau'}
            styleTextButton={{color:'rgb(13,92,182)', fontSize:'15px'}}
          />
        </div>
      </Col>
    </Row>
  )
}

export default ProductDetailsComponent