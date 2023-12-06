import { Input } from 'antd'
import React, { useState } from 'react'

const InputFormComponent = ({props}) => {
  const {valueInput, setValueInput} = useState('')
  const {placeholder = 'Nhap text'} = props 
  return (
    <div>
      <Input placeholder={"Nhap"} valueInput={valueInput}/>
    </div>
  )
}

export default InputFormComponent