import styled from "styled-components";
import { Image, InputNumber } from "antd";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;`

export const WrapperStyleColImage = styled(Image)`
  flex-basic: unset;
  display: flex;`

export const WrapperStyleNameProduct = styled.h1`
  color: rgb(36,36,36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-word;`

export const WrapperStyleTextSale = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120,120,120);`  

export const WrapperPriceProduct = styled.div`
  background: rgb(250,250,250);
  border-radius: 4px;`

export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;`

export const WrapperAddressProduct = styled.div`
  span.address{
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis1;
  };
  span.changeAddress {
    color: rgb(11,116,229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    flex-shrink: 0;
  }
`
export const WrapperQualityProduct = styled.div`
  display: flex;
  gap:4px;
  align-item: center;
  border-radius: 4px;
  width: 100px;
  border: 1px solid #ccc;
`
// export const WrapperBtnQualityProduct = styled.span`
//   border: 1px solid #ccc;
//   `

export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none; 
      &.ant-input-number-handler-wrap {
      display: none !important;}
  }`  