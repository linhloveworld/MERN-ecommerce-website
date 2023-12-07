import React, { useState } from 'react'
import { WrapperContainerLeft,WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Divider, Image } from 'antd'
import imageLogo from '../../assets/images/logo-login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignUpPage = () => {
  const {IsShowPassword, SetIsShowPassword} = useState(false)
  const {IsShowConfirmPassword, SetIsShowConfirmPassword} = useState(false)
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',background:'rgb(0,0,0,0.53)', height:'100vh'}}>
      <div style={{width:'800px',height:'445px',borderRadius:'6px',background:'#ffff',display:'flex'}}>
        <WrapperContainerLeft>
          <h1>Hello</h1>
          <p>Sign up account</p>
        <InputFormComponent style={{marginBottom:'10px'}} placeholder="abc@mail.com"/>
        <Divider/>
        <div style={{position:'relative'}}>
          <span 
          style={{
            zIndex:10,
            position:'absolute',
            top:'4px',
            right:'8px'
          }}>{
            IsShowPassword ? (
              <EyeFilled/>
            ) : (
              <EyeInvisibleFilled/>
            )
          }</span>
            <InputFormComponent placeholder="your password"/>
          </div>
          <div style={{position:'relative'}}>
            <span 
            style={{
              zIndex:10,
              position:'absolute',
              top:'4px',
              right:'8px'
            }}>{
              IsShowConfirmPassword ? (
                <EyeFilled/>
              ) : (
                <EyeInvisibleFilled/>
              )
            }</span>
            <InputFormComponent placeholder="confirm your password"/>
          </div>
        <ButtonComponent
              bordered={false}
              size={20}
              styleButton={{
                background:'rgb(255,57,69)',
                height:'48px',
                width:'100%',
                border:'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
              }}
              textButton={'Dang nhap'}
              styleTextButton={{color:'#ffff', fontSize:'15px',fontWeight:'700'}}
            />
            <p><WrapperTextLight>ABCXYZ</WrapperTextLight></p>
            <p>You've already have account?
              <WrapperTextLight>
                <span>Sign up</span>
              </WrapperTextLight> 
            </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <div>
            <Image src={imageLogo} preview={false} alt='logo-login' height="203px" width="203px"/>
          </div>
          <h4>Mua sam tai ABC</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage