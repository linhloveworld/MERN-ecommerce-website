import React from 'react'

const ButtonComponent = ({size,styleButton, styleTextButton, textButton,...props }) => {
  return (
    <div>
      <Button 
            size={size}
            styleButton={styleButton}
            {...props}
            // styleButton={{background: backgroundColorButton, border: '!bordered && none'}}
            // icon={<SearchOutlined 
            // color:{colorButton} 
            // style={{color:'#fff'}}/>} 
            // textButton={textButton}
            // styleButton
      >
        <span style={styleTextButton}>
          {textButton}
          </span>
        </Button>
    </div>
  )
}

export default ButtonComponent