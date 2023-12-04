import styled from 'styled-components';
import {Row} from "antd";

//export const WrapperTypeProduct 
export const WrapperHeader = styled(Row)`
        padding: 10px 120px;
        background-color: rgb(26, 148, 255); 
        align-item: center;
        flex-wrap: nowrap`

export const WrapperTextHeader = styled.span`
        font-size: 18px;
        color: #fff;
        font-weight: bold;`
export const WrapperHeaderAccount = styled.div`
        display: flex; 
        align-items: center; 
        color: #fff;
        gap:10px;`

export const WrapperTextHeaderSmall = styled.span`
        font-size:12px;
        color:#fff;
        white-space: nowrap;`
