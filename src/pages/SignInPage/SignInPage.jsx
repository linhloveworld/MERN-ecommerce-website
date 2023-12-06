import React from 'react'
import { WrapperContainerLeft,WrapperContainerRight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imageLogo from '../../assets/images/logo-login.png'
const SignInPage = () => {
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',background:'rgb(0,0,0,0.53)', height:'100vh'}}>
      <div style={{width:'800px',height:'445px',borderRadius:'6px',background:'#ffff',display:'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chao</h1>
          <p>Dang nhap va tao tai khoan</p>
        <InputFormComponent/>
        <ButtonComponent
              bordered={false}
              size={20}
              styleButton={{
                background:'rgb(255,57,69)',
                height:'48px',
                width:'220px',
                border:'none',
                borderRadius: '4px'
              }}
              textButton={'Dang nhap'}
              styleTextButton={{color:'#ffff', fontSize:'15px',fontWeight:'700'}}
            />
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

export default SignInPage