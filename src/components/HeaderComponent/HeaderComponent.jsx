import React from 'react';
import { Col, Row } from 'antd';
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
    <div>
      <WrapperHeader gutter={16}>
        <Col span={8}>
          <WrapperTextHeaderSmall>ABC</WrapperTextHeaderSmall>
        </Col>
        <Col span={12}>
          {/* <Search
            placeholder="input search text"
            enterButton
            size="large"
            onSearch="{onSearch}"
          /> */}
          <ButtonInputSearch size='large' textButton='Tim kiem' placeholder='Nhap tim kiem '/>
        </Col>
        <Col span={6} style={{display:'flex',gap:'20px'}}>
          <WrapperHeaderAccount>
          <div>
            <UserOutlined style={{fontSize:'12px'}}/>
          </div>
          <div>
            <span style={{fontSize:'12px'}}>Dang nhap/ Dang ky</span>
            <WrapperTextHeaderSmall>Tai khoan</WrapperTextHeaderSmall>
            <div>
              <CaretDownOutlined/>
            </div>
          </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{fontSize:'30px', color: '#fff'}}/>
            <WrapperTextHeaderSmall>Gio hang</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent