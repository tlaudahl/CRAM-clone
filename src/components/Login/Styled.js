import styled from 'styled-components';

export const MainContent = styled.main`
    padding: 0;
    background: #FFF;
    border-top: none;
    border: 1px solid #DDD;
    color: #222;
    font-size: 14px;
    min-height: 560px;
    overflow: hidden;
    margin: 0;
    outline: 0;
`

export const ContentType1 = styled.div`
    width: 1070px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
    height: 100%;
    margin: 0 auto 30px;
    background-color: #f9f8f8;
`

export const Body = styled.div`
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

export const Heading = styled.div`
    height: 70px !important;
    overflow: visible;
    padding: 20px 0 20px 30px;
    background: #F9F8F8;
    border: 1px solid #DEDEDE;
    border-radius: 10px 10px 0 0;
    margin-top: 33px;
    min-height: inherit;
`

export const ColumnListing = styled.ul`
    list-style: none;
`

export const LeftSide = styled.li`
    min-height: 525px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const SignUp = styled.form`
    margin: 0 auto;
`

export const SignUpLi = styled.li`
    clear: both;
    margin: 0 0 12px;
    list-style: none;
    text-align: left;
`

export const Label = styled.label`
    color: #C2C8CC;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    line-height: inherit;
    margin: 0 0 5px;
`

export const Input = styled.input`
    height: 44px;
    width: 405px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    font: 14px "Open Sans", Arial, sans-serif;
    color: #3C3C38;
    box-shadow: 0px 0px 0px #FFF;
    text-shadow: none;
`

export const Button = styled.button`
    -webkit-appearance: none;
    background: #8ABC54;
    color: #FFF;
    font-weight: 600;
    padding: 12px 0px;
    width: 120px;
    cursor: pointer;
    line-height: normal;
    font-size: 16px;
    text-align: center;
    border: 0px;
    opacity: 1;
    -webkit-border-radius: 8px;
`