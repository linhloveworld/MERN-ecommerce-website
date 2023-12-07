import React from 'react';
import { Badge, Col, Row } from 'antd';
import { Button, Flex } from 'antd';
import { WrapperHeader, 
  WrapperTextHeader, 
  WrapperTextHeaderSmall, 
  WrapperHeaderAccount } from './style'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { UserOutlined, 
  CaretDownOutlined, 
  ShoppingCartOutlined  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const {Search} = Input
const HeaderComponent = () => {
  return (
    <div style={{width:'100%', background:'rgb(26, 248, 255)',display:'flex', justifyContent:'center'}}>
      <WrapperHeader gutter={16}>
        <Col span={8}>
          <WrapperTextHeaderSmall>ABC</WrapperTextHeaderSmall>
        </Col>
        <Col span={13}>
          {/* <Search
            placeholder="input search text"
            enterButton
            size="large"
            onSearch="{onSearch}"
          /> */}
          <ButtonInputSearch 
          size='large' 
          textButton="Search" 
          placeholder="..."
          bordered={false}/>
        </Col>
        <Col span={6} style={{display:'flex',gap:'54px', alignItems:'center'}}>
          <WrapperHeaderAccount>
          <UserOutlined style={{fontSize:'30px'}}/>
          <div>
            <span style={{fontSize:'12px'}}>Dang nhap/ Dang ky</span>
            <WrapperTextHeaderSmall>Tai khoan</WrapperTextHeaderSmall>
            <div>
              <CaretDownOutlined/>
            </div>
          </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small'></Badge>
            <ShoppingCartOutlined style={{fontSize:'30px', color: '#fff'}}/>
            <WrapperTextHeaderSmall>Gio hang</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent