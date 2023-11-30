import React from 'react'
import { Input } from 'antd'
const InputComponent = ({size, placeholder, bordered,style,...props}) => {
  return (
    <div>
        <Input 
        size={size} 
        placeholder={placeholder} 
        bordered={bordered} 
        style={style}
        {...props}
        />
    </div>
  )
}

export default InputComponent