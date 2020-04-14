import React from 'react'

import { Body, ContentType1, Heading, MainContent, ColumnListing, LeftSide, SignUp, SignUpLi, Input, Label, Button, P } from './Styled';

export default function Registration() {
    return (
        <Body>
            <ContentType1>
                <Heading>
                    <h1 style={{ fontSize: "2.5rem"}}>Sign up for your FREE account</h1>
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
                                        <Input type={'password'} />
                                    </SignUpLi>
                                    <SignUpLi>
                                        <Label>Enter your email.</Label>
                                        <Input />
                                    </SignUpLi>
                                    <Button>Sign Up</Button>
                                </ul>
                            </SignUp>
                            <P>
                                Already have an account? <a href='/login'>Login</a>.
                            </P>
                        </LeftSide>
                    </ColumnListing>
                </MainContent>
            </ContentType1>
        </Body>
    )
}
