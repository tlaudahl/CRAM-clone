import React from 'react';
import styled from 'styled-components';
import magnifying_glass from '../../assets/magnifying_glass.png' 
import create_card from '../../assets/create_card.png' 

const ContentType2 = styled.div`
    box-shadow: none;
    height: 100%;
    margin: 0 auto 30px;
    position: relative;
    width: 1031px;
`

const TopPlacement = styled.div`
    display: inline-block;
    height: 235px;
    padding: 0 40px;
    width: 900px;
    position: relative;
`

const FormHolder = styled.div`
    background: url(${magnifying_glass}) no-repeat 0 90px;
    float: left;
    height: 100px;
    padding: 60px 0 80px;
    width: 76%;
`

const FormHolderH1 = styled.h1`
    font-weight: 600;
    letter-spacing: .2px;
    font-size: 30px;
    margin-bottom: 4px;
    text-align: left;
    text-shadow: -1px -1px #ccc, 1px 1px #fff;
    color: #404040;
`

const SearchInput = styled.input`
    box-shadow: 1px 1px 6px #CCC inset;
    color: #8F908F;
    float: left;
    font-style: italic;
    height: 36px;
    margin: 0 -12px 0 0;
    width: 330px;
    display: block;
    background: #FFF;
    border: 1px solid #DDD;
    padding: 5px 10px;
    font-size: 14px;
    text-shadow: none;
    border-radius: 4px;
`

const SearchButton = styled.button`
    -webkit-appearance: none;
    box-shadow: 0 0 0 white;
    margin-left: 20px;
    width: 100px;
    opacity: 1;
    background: #8ABC54;
    color: #FFF;
    font-weight: 600;
    padding: 12px 0px;
    -webkit-border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    font-size: 16px;
    text-align: center;
    border: 0px;
`

const OptionCallout = styled.div`
    color: #333;
    display: block;
    height: 40px;
    left: 584px;
    position: relative;
    text-align: center;
    top: 100px;
    width: 40px;
`

const OptionCalloutP = styled.p`
    font-size: 24px;
    font-weight: 600;
    left: 8px;
    position: absolute;
    top: 2px;
    z-index: 1;
`

const LineBorder = styled.div`
    border-right: 1px solid #fff;
    box-shadow: 1px 0 0 #CCC;
    height: 140px;
    left: -20px;
    position: relative;
    top: -50px;
    z-index: 0;
`

const CtaPromo = styled.div`
    background: url(${create_card}) no-repeat 10px 0 transparent;
    height: 100px;
    position: absolute;
    text-align: center;
    right: 0px;
    top: 81px;
    z-index: 1;
`

const CtaLink = styled.a`
    text-decoration: none;
    opacity: 1;
    top: 50px;
    left: -20px;
    position: relative;
    background: #8ABC54;
    color: #FFF;
    font-weight: 600;
    padding: 12px 0px;
    width: 200px;
    -webkit-border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    font-size: 16px;
    text-align: center;
    border: 0px;
`

const CtaPromoH2 = styled.h2`
    font-weight: 600px;
    font-size: 22px;
    margin: 80px 0 0 -40px;
    letter-spacing: .2px;
`

const Heading = styled.div`
    border-bottom: 1px solid #DEDEDE;
    border-radius: 14px 14px 0 0;
    box-shadow: inset 1px 2px 1px #fff;
    height: 80px !important;
    margin-top: 25px;
    overflow: visible;
    padding: 0;
    background: #F9F8F8;
    border: 1px solid #DEDEDE;
    min-height: inherit;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const HeadingUl = styled.ul`
    list-style: none;
`

const HeadingLi = styled.li`
    float: left;
    font-size: 12px;
    height: 65px;
    text-align: center;
    width: 178px;
`

const LiStrong = styled.strong`
    color: #454D53;
    display: block;
    font-size: 22px;
    font-weight: normal;
`

const MainContent = styled.main`
    background: #fff;
    border-top: none;
    min-height: 780px;
    overflow: auto;
    border: 1px solid #DDD;
    color: #222;
    font-size: 14px;
    position: relative;
`

const MainContentH2 = styled.h2`
    text-align: center;
    clear: both;
    font-size: 16px;
    padding: 0 0 8px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const H2Span = styled.span`
    background: #fff;
    padding: 0 10px;
    position: relative;
`

const CatergoryA = styled.a`
    text-decoration: none;
    color: #1D95CB;
    font-size: 1.8rem;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
