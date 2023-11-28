import React from 'react';
import { Col, Row } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import { Search } from 'antd';
import { UserOutLined } from '@ant-design/icons';
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={8}>
          <WrapperTextHeaderSmall>ABC</WrapperTextHeaderSmall>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            enterButton
            size="large"
            onSearch="{onSearch}"
          />
        </Col>
        <Col span={6} style={{display:'flex',gap:'20px'}}>
          <WrapperHeaderAccount>
          <div>
            <UserOutLined style={{fontSize:'12px'}}/>
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