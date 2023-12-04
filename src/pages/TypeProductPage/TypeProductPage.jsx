import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Pagination, Row } from 'antd'
import Col from 'antd/es/grid/col'
import { WrapperNavBar } from './style'

const TypeProductPage = () => {
  const onChange = () => {} 
  return (
    <div style={{padding: '0 120px',background:'#efefef'}}>
      <Row style={{flexWrap:'nowrap', paddingTop:'10px'}}>
        <WrapperNavBar span={4}>
          <NavbarComponent />
        </WrapperNavBar>
        <WrapperProducts span={20}>
        </WrapperProducts>
        <Col span={20}>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent />
          <Pagination showQuickJumper defaultCurrent={2} total={10} onChange={onChange} style={{textAlign:'center',marginTop:'10px'}}/>
        </Col>
      </Row>
    </div>
  )
}

export default TypeProductPage