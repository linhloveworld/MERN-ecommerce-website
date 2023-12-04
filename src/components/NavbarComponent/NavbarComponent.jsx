import React from 'react'
import { Checkbox, Col, Rate, Row } from 'antd';

const NavbarComponent = () => {
  const onChange = () => {

  }
  const renderContent = (type) => {
    switch(type){
      case 'text':
        return option.map((option) => {
          return (
            <WrapperTextValue>{option}</WrapperTextValue>
          ) 
        })
      case 'checkbox':
          return (
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection:'column', display: 'flex',gap:'12px'}} onChange={onChange}>
                  {option.map((option) => {
                    return (
                      <Checkbox style={{marginLeft:'0'}} value={option.value}>{option.label}</Checkbox>
                    )
                  })}
                    <Checkbox value="A">A</Checkbox>
                    <Checkbox value="B">B</Checkbox>
              </Checkbox.Group>
          )
      case 'star':
            return (
              options.map((option) => {
                console.log('check',option)
                 return (
                 <div style={{display:'flex',gap:'4px'}}>
                    <Rate
                    style={{fontSize:'12px'}} 
                    disabled 
                    defaultValue={option}/>
                    <span>tu {option} sao</span>
                 </div> 
                 )
              })
            )
      case 'price':
        return (
          option.map((option) => {
            return (
              <WrapperTextPrice>{option}</WrapperTextPrice>
            )
          })
        )
      default: return {}      

    }
  }
  return (
    <div style={{backgroundColor:'#ffff'}}>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
      {renderContent('text',['Do choi 1','Do choi 2','Do choi 3'])}
      </WrapperContent>
      {/* <WrapperContent>
        {renderContent('checkbox', [
          {value: 'a', label: 'A'},
          {value: 'a', label: 'B'}
        ])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('star', [3,4,5])}
      </WrapperContent> */}
    </div>
  )
}

export default NavbarComponent