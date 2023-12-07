import styled from "styled-components";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-item: center;
  gap: 24px;
  justify-content: flex start;
  border-radius: 10px;
  height: 44px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover{
    color:#fff;
    background: rgb(13,92,182);
    span {
      color: #ffff;
    }
  }
  width: 100%;
  text-align: center;`

  export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap:wrap;`