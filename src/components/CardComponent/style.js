import { Card } from 'antd';
import styled from 'styled-components';

export const WrapperCardStyle = styled(Card)`
 width: 200px;
 & img {
  height: 200px;
  width: 200px;
 },
 position: relative;`

export const WrapperImageStyle = styled.img`
  top: -1px;
  left: 1px;
  border-top-left-radius: 4px;
  position: absolute;
  height: 14px !important;
  width: 68px !important;` 
export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-weight: 16px;
  color: rgb(56,56,61)`

export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(120,128,132);
  align-items:center;
  display: flex;
  `
export const WrapperPriceText = styled.div`
  color: rgb(255,66,78);
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;`

export const WrapperDiscountText = styled.div`
  color: rgb(255,66,78);
  font-size: 12px;
  font-weight: 500;`

export const WrapperStyleTextSale = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120,120,120);` 