import styled from 'styled-components'
import magnifying_glass from '../../assets/magnifying_glass.png' 
import create_card from '../../assets/create_card.png' 

export const ContentType2 = styled.div`
    box-shadow: none;
    height: 100%;
    margin: 0 auto 30px;
    position: relative;
    width: 1031px;
`

export const TopPlacement = styled.div`
    display: inline-block;
    height: 235px;
    padding: 0 40px;
    width: 900px;
    position: relative;
`

export const FormHolder = styled.div`
    background: url(${magnifying_glass}) no-repeat 0 90px;
    float: left;
    height: 100px;
    padding: 60px 0 80px;
    width: 76%;
`

export const FormHolderH1 = styled.h1`
    font-weight: 600;
    letter-spacing: .2px;
    font-size: 30px;
    margin-bottom: 4px;
    text-align: left;
    text-shadow: -1px -1px #ccc, 1px 1px #fff;
    color: #404040;
`

export const SearchInput = styled.input`
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

export const SearchButton = styled.button`
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

export const OptionCallout = styled.div`
    color: #333;
    display: block;
    height: 40px;
    left: 584px;
    position: relative;
    text-align: center;
    top: 100px;
    width: 40px;
`

export const OptionCalloutP = styled.p`
    font-size: 24px;
    font-weight: 600;
    left: 8px;
    position: absolute;
    top: 2px;
    z-index: 1;
`

export const LineBorder = styled.div`
    border-right: 1px solid #fff;
    box-shadow: 1px 0 0 #CCC;
    height: 140px;
    left: -20px;
    position: relative;
    top: -50px;
    z-index: 0;
`

export const CtaPromo = styled.div`
    background: url(${create_card}) no-repeat 10px 0 transparent;
    height: 100px;
    position: absolute;
    text-align: center;
    right: 0px;
    top: 81px;
    z-index: 1;
`

export const CtaLink = styled.a`
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

export const CtaPromoH2 = styled.h2`
    font-weight: 600px;
    font-size: 22px;
    margin: 80px 0 0 -40px;
    letter-spacing: .2px;
`

export const Heading = styled.div`
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

export const HeadingUl = styled.ul`
    list-style: none;
`

export const HeadingLi = styled.li`
    float: left;
    font-size: 12px;
    height: 65px;
    text-align: center;
    width: 178px;
`

export const LiStrong = styled.strong`
    color: #454D53;
    display: block;
    font-size: 22px;
    font-weight: normal;
`

export const MainContent = styled.main`
    background: #fff;
    border-top: none;
    min-height: 780px;
    overflow: auto;
    border: 1px solid #DDD;
    color: #222;
    font-size: 14px;
    position: relative;
`

export const MainContentH2 = styled.h2`
    text-align: center;
    clear: both;
    font-size: 16px;
    padding: 0 0 8px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const H2Span = styled.span`
    background: #fff;
    padding: 0 10px;
    position: relative;
`

export const CatergoryA = styled.a`
    text-decoration: none;
    color: #1D95CB;
    font-size: 1.8rem;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`