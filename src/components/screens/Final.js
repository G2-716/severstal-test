import React from 'react';
import styled from 'styled-components';
import { fade, slideDown } from '../../utils/keyframes';
import { ShareArrow } from "../Button/ShareArrow";
import { Logo } from "../svg/Logo";
import { DesktopShare } from "../Button/DesktopShare";
import { useResult } from '../../hocs/useResult';
import { getShareParams, SocialNetwork } from '../../utils/getShareParams';

const FinalWrapper = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100%;
  padding: 8.3333% 0 0 6.9444% ;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  overflow: auto;
  position: relative;
  @media screen and (max-width: 1100px)
  { 
    padding:0;
    grid-template-rows: 3fr 2fr  10.25%;
    grid-template-columns: 100% ;
    @media screen and (orientation: landscape) and (max-height: 400px){
    grid-template-rows: 51% 1fr 10.25%;
    }
  }
`;

const ResultTitle = styled.h1`
  font-weight: 800;
  font-size: 2.5vw;
  line-height: 2.5vw;
  letter-spacing: 0.015em;
  margin-bottom: 4.4444%;
  
  @media screen and (max-width: 1100px)
  {
    padding: 0;
    font-size: 6.6666vw;
    margin-bottom: 6.4971%;
  }
  
  @media screen and (max-width: 1100px) and (orientation: landscape)
  {
    margin-top: -2%;
    margin-bottom: 2.4971%;
    font-size: 5.6666vw;
  }
   @media screen and (min-width: 640px) and (max-width: 1100px)
  {
    font-size: 3.809vh;
    @media screen and (orientation: landscape) and (max-height: 700px) 
    {
     font-size: 3.6596vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 4.3472vw;
    @media screen and (min-height: 560px ) 
      {
        font-size: 4.0041vh;
      }
     
  }
  @media screen and (max-height: 640px) and (orientation: landscape) and (max-width: 1100px){
      font-size: 3.6564vw;
  }
  
`
const Text = styled.p`
  font-size: 1.6666vw;
  line-height: 113%;
  
  @media screen and (min-width: 640px) and (max-width: 1100px)
  {
    font-size: 2.5428vw;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 2.438vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 2.9064vw;
    @media screen and (min-height: 520px ) 
      {
        font-size: 2.6675vh;
      }
  }
  @media screen and (max-height: 640px) and (orientation: landscape)and (max-width: 1100px){
      font-size: 2.1341vw;
  }
  
`
const LogoWrapper = styled.div`
  width: 13.6111%;
  height: 6.7777%;
  position: absolute;
  top: 6.6666vh;
  right: 3.125vw;
  animation: ${slideDown} 0.4s ease-out 0.1s both;
  
  @media screen and (max-width: 1100px){
      width: 20.3333%;
      height: 5.7812%;
      top: 2.9687%;
      left: 3.333%;
       @media screen and (orientation: landscape) and (max-height: 760px) {
           width: 15.3333%;
       }
       @media screen and (orientation: landscape) and (max-height: 180px) {
           width: 9.3333%;
           top: 1.9687%;
       }
   }
`
const InfoWrapper = styled.div`
  padding: 20% 10.9234% 0 9.5798%;
  grid-area:1/2/2/2;
  @media screen and (max-width: 1100px)
  {
    grid-area: 2/1/3/1;
    padding: 5.6% 7.5%;
  }
  
`

const ResultText = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.1s both;
`

const InvitingText = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.4s both;
`

const LogoStyled = styled(Logo)`
    max-width: 100%;
`

const ImgWrapper = styled.div`
  animation: ${fade} 0.4s ease-out 0.1s both;
  grid-area:1/1/3/2;

 @media screen and (max-width: 1100px)
  { 
      grid-area:1/1/2/1;
      overflow: hidden;
      position: relative;
      height: 89.5%;
       @media screen and (orientation: landscape) and (max-height: 400px){
          grid-template-rows: 51% 1fr 10.25%;
          height:100%;
          width: 60%;
          margin: 0 auto;
       }
  }
`

const ImgStyled = styled.img`
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  
  @media screen and (max-width: 1100px) { 
    height: auto;
    max-height: none;
    position:absolute;
    width:100%;
    overflow: hidden;
    object-fit: cover;
    
    @media screen and (orientation: landscape) and (max-height: 400px){
      margin-top: -9.615vh;
    }
  }
`

const DesktopShareLink = styled.a`
  text-decoration: none;
`;

const MobileShareLink = styled.a`
    padding-left: 7.5%;
    border: none;
    background: none;
    color: white;
    font-size: 5vw;
    font-weight: 800;
    outline: none;
    text-decoration: none;
    grid-area:3/1/3/1;
    
    @media screen and (orientation: landscape) and (max-width: 1100px){
      font-size: 4.8vw;
      bottom: 2.5%;
    }
    
    @media screen and (min-width: 1100px){
         //font-size: 2.5vw;
         //grid-area:2/2/2/2;
         //padding-left: 9.5798%;
         display: none;
    }
    @media screen and (max-width: 1100px)
    {
        font-size: 4.9999vw;
    }
  
    @media screen and (max-width: 1100px) and (orientation: landscape)
    {
      font-size: 4.2496vw;
    }
     @media screen and (min-width: 640px) and (max-width: 1199px)
    {
       font-size: 2.8568vh;
      @media screen and (orientation: landscape) and (max-height: 700px)
     {
       font-size: 2.7447vw;
     } 
    }
    
    @media screen and (max-width: 640px)
    {
       font-size: 3.2604vw;
       @media screen and (min-height: 560px ) 
       {
         font-size: 3.0003vh;
       }
    }
    @media screen and (max-height: 640px) and (orientation: landscape) and (max-width: 1100px){
      font-size: 2.7423vw;
    }
    
`
const StyledLink = styled.a`
    color: white;
`

export const Final = props => {
    const result = useResult();
    const vkShareParams = getShareParams(SocialNetwork.vk, result);

    return (
        <FinalWrapper>
            <ImgWrapper>
                <ImgStyled src={result.image} alt={''}/>
            </ImgWrapper>
            <LogoWrapper>
                <LogoStyled />
            </LogoWrapper>
            <InfoWrapper>
                <ResultTitle>Твой результат</ResultTitle>
                <ResultText>{result.description}</ResultText>
                <br />
                <InvitingText>
                    Хочешь, чтобы было так? Проходи отбор &nbsp;
                    <StyledLink href={'http://fut.ru/grp/severstal_grp'}>
                        на лидерскую программу компании “Северсталь”
                    </StyledLink>
                </InvitingText>
                <DesktopShareLink href={`http://vk.com/share.php?${vkShareParams.toString()}`}>
                    <DesktopShare />
                </DesktopShareLink>
            </InfoWrapper>
            <div>
            <MobileShareLink href={`http://vk.com/share.php?${vkShareParams.toString()}`}>
                Поделиться
                <ShareArrow />
            </MobileShareLink>
            </div>
        </FinalWrapper>
    );
};