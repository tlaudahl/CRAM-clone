import React from 'react'

import { Body, ContentType1, Heading, MainContent, ColumnListing, LeftSide, SignUp, SignUpLi, Input, Label, Button, P } from './Styled';

export default function Registration() {
    return (
        <Body>
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
                    </ColumnListing>
                </MainContent>
            </ContentType1>
        </Body>
    )
}
