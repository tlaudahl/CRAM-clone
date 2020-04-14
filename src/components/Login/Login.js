import React, { useState } from 'react'

import {
    Body,
    ContentType1,
    Heading,
    MainContent,
    ColumnListing,
    LeftSide,
    SignUp,
    SignUpLi,
    Input,
    Label,
    Button
} from './Styled';



export default function Login() {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
    })

    const handleChange = e => {
        const { dataset, value } = e.target;
        setLoginInfo({...loginInfo, [dataset.name]: value})
    }

    return (
        <Body>
            <ContentType1>
                <Heading>
                    <h1 style={{ fontSize: "2.5rem"}}>Login to your account</h1>
                </Heading>
                <MainContent>
                    <ColumnListing>
                        <LeftSide>
                            <SignUp>
                                <ul>
                                    <SignUpLi>
                                        <Label>Username</Label>
                                        <Input data-name={'username'} onChange={handleChange}/>
                                    </SignUpLi>
                                    <SignUpLi>
                                        <Label>Password</Label>
                                        <Input data-name={'password'} type={'password'} onChange={handleChange} />
                                    </SignUpLi>
                                    <Button onClick={(e) => {
                                        e.preventDefault()
                                        console.log(loginInfo)
                                    }}>Login</Button>
                                </ul>
                            </SignUp>
                        </LeftSide>
                    </ColumnListing>
                </MainContent>
            </ContentType1>
        </Body>
    )
}
