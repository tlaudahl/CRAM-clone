import React from 'react'
import styled from 'styled-components'

const MainContent = styled.main`
    padding: 0;
    background: #FFF;
    border-top: none;
    border: 1px solid #DDD;
    color: #222;
    font-size: 14px;
    min-height: 560px;
    position: relative;
    overflow: hidden;
`

const ContentType1 = styled.div`
    width: 1070px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
    height: 100%;
    margin: 0 auto 30px;
    position: relative;
    background-color: #f9f8f8;
`

const Heading = styled.div`
    height: 70px !important;
    overflow: visible;
    padding: 20px 0 20px 30px;
    background: "#F9F8F8";
    border: 1px solid #DEDEDE;
    border-radius: 10px 10px 0 0;
    margin-top: 33px;
    min-height: inherit;
    position: relative;
`

const ColumnListing = styled.ul`
    position: relative;
    display: inline-block;
    list-style: none;
`

const LeftSide = styled.li`
    border-right: 1px solid #DDD;
    float: left;
    min-height: 525px;
    padding: 30px;
    position: relative;
    width: 436px;
`

const SignUp = styled.form`
    margin: 0;
    position: relative;
`

const SignUpLi = styled.li`
    clear: both;
    margin: 0 0 12px;
    list-style: none;
`

const Label = styled.label`
    color: #C2C8CC;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    line-height: inherit;
    margin: 0 0 5px;
    display: block;
    float: left;
`

const Input = styled.input`
    height: 44px;
    width: 405px;
    display: block;
    padding: 5px 10px;
    font: 14px "Open Sans", Arial, sans-serif;
    color: #3C3C38;
    box-shadow: 0px 0px 0px #FFF;
    text-shadow: none;
`

const Button = styled.button`
    -webkit-appearance: none;
    background: #8ABC54;
    color: #FFF;
    font-weight: 600;
    padding: 12px 0px;
    width: 120px;
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    font-size: 16px;
    text-align: center;
    border: 0px;
    opacity: 1;
    -webkit-border-radius: 8px;
`

const P = styled.p`
    font-size: 13px;
    margin: 25px 0;
`

const Option = styled.li`
    background-color: #fff;
    background-image: -moz-linear-gradient(top, #fff, #fbfbfb);
    border: 1px solid #ddd;
    border-radius: 50%;
    box-shadow: 2px 2px 2px #fff, inset 1px 1px 1px 1px #fff;
    color: #333;
    display: block;
    height: 40px;
    left: 475px;
    position: absolute;
    text-align: center;
    top: 250px;
    width: 40px;
`

export default function Registration() {
    return (
        <div>
            <ContentType1>
                <Heading>
                    <h1>Sign up for your FREE account</h1>
                </Heading>
                <MainContent>
                    <ColumnListing>
                        <LeftSide>
                            <SignUp>
                                <ul>
                                    <SignUpLi>
                                        <Label>Choose a username.</Label>
                                        <Input />
                                    </SignUpLi>
                                    <SignUpLi>
                                        <Label>Choose a password.</Label>
                                        <Input />
                                    </SignUpLi>
                                    <SignUpLi>
                                        <Label>Enter your email.</Label>
                                        <Input />
                                    </SignUpLi>
                                    <SignUpLi>
                                        <Button>Sign Up</Button>
                                    </SignUpLi>
                                </ul>
                            </SignUp>
                            <P>
                                By clicking 'Sign Up' you agree to our
                                 <a href="/terms" target="blank">Terms of Use</a> 
                                 and 
                                 <a href="/privacy" target="blank">Privacy Policy</a> 
                                .
                            </P>
                        </LeftSide>
                        <Option>
                            <p style={{ marginTop: '10px' }}>or</p>
                        </Option>
                    </ColumnListing>
                </MainContent>
            </ContentType1>
        </div>
    )
}
