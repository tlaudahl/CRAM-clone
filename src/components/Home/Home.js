import React from 'react';
import { ContentType2, TopPlacement, FormHolder, FormHolderH1, SearchInput, SearchButton, OptionCallout, OptionCalloutP, LineBorder, CtaPromo, CtaLink, CtaPromoH2, Heading, HeadingLi, HeadingUl, MainContent, MainContentH2, H2Span, CatergoryA, LiStrong } from './Styled';

export default function Home() {
    return (
        <ContentType2>
            <header>
                <TopPlacement>
                    <FormHolder>
                        <div style={{ marginLeft: '80px' }}>
                            <FormHolderH1>
                                Find Flashcards to study
                            </FormHolderH1>
                            <form>
                                <ul style={{ width: '100%', listStyle: 'none', position: "relative", left: "-40px" }}>
                                    <li>
                                        <SearchInput placeholder={"Search over 195 million flashcards"} maxLength={"250"} size={"40"}/>
                                    </li>
                                    <li>
                                        <SearchButton type={'submit'}>Search</SearchButton>
                                    </li>
                                </ul>
                            </form>
                        </div> 
                    </FormHolder>
                    <OptionCallout>
                        <OptionCalloutP>or</OptionCalloutP>
                        <LineBorder />
                    </OptionCallout>
                    <CtaPromo>
                        <CtaLink href='/flashcard/create'>
                            <span>Create Flashcards</span>
                        </CtaLink>
                        <CtaPromoH2>Make your own cards</CtaPromoH2>
                    </CtaPromo>
                </TopPlacement>
            </header>
            <Heading>
                    <HeadingUl>
                        <HeadingLi>
                            <LiStrong># of Members</LiStrong>
                            members
                        </HeadingLi>
                        <HeadingLi>
                            <LiStrong># of flashcards</LiStrong>
                            flashcards
                        </HeadingLi>
                        <HeadingLi>
                            <LiStrong># added this week</LiStrong>
                            flashcards added this week
                        </HeadingLi>
                    </HeadingUl>
            </Heading>
            <MainContent>
                        <div>
                            <MainContentH2>
                                <H2Span>Browse By Subject</H2Span>
                            </MainContentH2>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <CatergoryA href='/javascript'><i className="fab fa-js-square fa-6x"></i> JavaScript</CatergoryA>
                                <CatergoryA href='/node'><i className="fab fa-node fa-6x"></i> Node.js</CatergoryA>
                                <CatergoryA href='/react'><i className="fab fa-react fa-6x"></i> React</CatergoryA>
                                <CatergoryA href='/python'><i className="fab fa-python fa-6x"></i> Python</CatergoryA>
                                <CatergoryA href='/css'><i className="fab fa-css3-alt fa-6x"></i> CSS</CatergoryA>
                                <CatergoryA href='/python'><i className="fab fa-html5 fa-6x"></i> HTML</CatergoryA>
                        </div>
            </MainContent>
        </ContentType2>
    )
}
