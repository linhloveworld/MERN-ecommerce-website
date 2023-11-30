import Input from 'antd/lib/input/Input';
import React from 'react';
import { Button, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
  const {size, placeholder, textButton, bordered, 
    backgroundColorInput='#ffff', 
    backgroundColorButton='rgb(13,92,182)',
    colorButton='#fff'} = props;
  return (
    <div style={{display:'flex'}}>
      <InputComponent
          size={size}
          placeholder={placeholder}
          bordered={bordered}
          style={{backgroundColor:backgroundColorInput}}/>
      <ButtonComponent 
            size={size}
            styleButton={{background: backgroundColorButton, border: '!bordered && none'}}
            icon={<SearchOutlined color={colorButton} 
            style={{color:'#fff'}}/>} 
            textButton={textButton}
            styleTextButton={{color: colorButton}}>
              <span style={{color:colorButton}}>{textButton}
              </span>
      </ButtonComponent>
    </div>
  )
}

export default ButtonInputSearch