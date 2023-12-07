//import { Input } from 'antd'
import React, { useState } from 'react'
import { WrapperStyleInput } from './style'

const InputFormComponent = ({props}) => {
  const {valueInput, setValueInput} = useState('')
  const {placeholder = 'Nhap text', ...rests} = props 
  return (
    <>
      <WrapperStyleInput placeholder={"Nhap"} valueInput={valueInput} {...rests}>
        <span>Hide password</span>
      </WrapperStyleInput>
    </>
  )
}

export default InputFormComponent