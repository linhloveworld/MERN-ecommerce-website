import Input from 'antd/lib/input/Input';
import React from 'react';
import { Button, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const ButtonInputSearch = (props) => {
  const {size, placeholder, textButton} = props;
  return (
    <div style={{display:'flex'}}>
      <Input size={size} placeholder={placeholder} bordered={false} />
      <Button size={size} icon={<SearchOutlined/>}>{textButton}</Button>
    </div>
  )
}

export default ButtonInputSearch