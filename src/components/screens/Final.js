import React from 'react';
import styled from 'styled-components';
import { fade, slideDown } from '../../utils/keyframes';
import { Logo } from "../shared/svg/Logo";
import { useResult } from '../../hocs/useResult';
import { getShareParams, SocialNetwork } from '../../utils/getShareParams';
import { VKShareButton } from '../shared/buttons/sharing/VKShareButton';
import { FacebookShareButton } from '../shared/buttons/sharing/FacebookShareButton';
import {Text} from "../shared/Text";
import {Subtitle} from "../shared/Subtitle";
import { ImageRectangle } from './ImageRectangle';
import { useBodyBackgroundColor } from '../../hocs/useBodyBackgroundColor';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const FinalWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  grid-template-rows: 1fr;
  width: 100%;
  padding-left: 13.6979vw ;
  color: #FFFFFF;
  background-color: #000000;
  overflow: hidden;

  @media screen and (max-width: 1100px) { 
    padding-left: 0;
    display: inline-block;
    @media screen and (orientation: landscape) {
       padding-bottom: 0;
    }
  }
`;

const ResultTitle = styled(Subtitle)`
  margin-bottom: 8.4259vh;
  padding: 0;
  @media screen and (max-width: 1100px)
  {
    margin-bottom: 6.4971%;
  }
  
  @media screen and (max-width: 1100px) and (orientation: landscape)
  {
    margin-bottom: 2.4971%;
  }
  @media screen and (max-width: 640px) and (orientation: portrait)
  {
        padding: 0;
        margin-bottom: 4.9261vh;
  }
   
  
  @media screen and (max-height: 640px) and (orientation: landscape)and (max-width: 1100px) {
    font-size: 2.1341vw;
  }
`
const LogoWrapper = styled.div`
  width: 9.0104vw;
  height: 6.7777%;
  position: absolute;
  top: 6.7592vh;
  left: 13.6979vw;
  animation: ${slideDown} 0.4s ease-out 0.1s both;
  
  @media screen and (max-width: 1100px){
     display: none;
   }
`
const InfoWrapper = styled.div`
  padding-top: 36.3888vh;
  grid-area:1/1/2/2;
  @media screen and (max-width: 1100px)
  { 
    position: relative;
    grid-area: 1/1/1/3;
    max-height: 100%;
    padding: 0 15.2343vw 0 12.36872vw;
    margin: -3.6133vh 0 3.125vh 0;
    z-index: 3;
    color: white;
    
    @media screen and (orientation: landscape) {
      margin: 74vh 0 3.125vh 0;
    }
  }
  
  @media screen and (max-width: 640px) and (orientation: portrait)
  { 
      padding: 0 7.5333vw 0 8.5333vw; 
  }
  
`
const Blackout = styled.div`
  position: absolute;
  top: 31.9335vh;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%);
  @media screen and (min-width: 1100px){
    display: none;
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
  grid-area: 1/2/2/2;
  padding-top: 10vh;
  max-height: 100vh;
  
  @media screen and (max-width: 640px) and (orientation: portrait) {
      width: 375px;
  }
  
 @media screen and (max-width: 1100px)
  { 
      padding: 0;
      grid-area: 1/1/1/3;
      width: 556px;
      height: 64.5vh;
      margin: 0 auto;
      overflow: hidden;
      @media screen and (orientation: landscape) {
         height: 100vh;
         position: absolute;
         width: 100%;
      }
  }
`

const ImgStyled = styled.img`
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  @media screen and (max-width: 1100px) { 
    max-height: none;
    overflow: hidden;
    object-fit: cover;
    height: 100%;
    @media screen and (orientation: landscape) {
      height: auto;
    }
  }
  
  @media screen and (max-width: 640px) and (orientation: portrait) {
      height: auto;
      transform: translate(-15%, 0);
      max-height: 100%;
      object-fit: contain;
  }
  
`

const ShareBox = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin: 10.2777vh 0 4vh 0;
  
  @media screen and (max-width: 1100px) { 
     margin-top: 4.78516vh;
  }
`;

const ShareText = styled.p`
  font-size: 1.30208vw;
  color: #9E9E9D;
  font-weight: 800;
    
  @media screen and (min-width: 640px) and (max-width: 1100px) {
    font-size: 1.9545vh;
        @media screen and (orientation: landscape) and (max-height: 700px)
        {
         font-size: 1.8939vw;
        }
  }
    
  @media screen and (max-width: 640px){
        font-size: 2.3184vw;
        @media screen and (min-height: 560px) {
    font-size: 1.6092vh;
          }
        
    @media screen and (orientation: landscape)  {
      font-size: 1.94515vw;
    }
  }
`;

const StyledLink = styled.a`
  color: white;
`

const ShareIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.77vw;
`

const ShareButtonSizeMixin = (props) => `
  width: 3.212vw;
    
  @media screen and (min-width: 640px) and (max-width: 1100px) {
    width: 4.5031vh;
        @media screen and (orientation: landscape) and (max-height: 750px)
        {
         width: 5.3635vw;
        }
        @media screen and (orientation: landscape) and (min-width: 800px)
        {
         width: 4.8635vw;
        }
        @media screen and (orientation: portrait) and (min-height: 640px)
        {
          width: 6.2354vw;
          
          @media screen and (min-height: 1000px){
              width: 4.8354vh;
            }
        }
       
  }
    
  @media screen and (max-width: 640px){
        width: 4.8425vh;
        
        @media screen and (orientation: landscape){
                width: 6.2437vw;
                @media screen and (max-height: 500px) {
                    width: 7vw;
                }
        }
        
        @media (min-width: 400px){
            width: 7.6123vw;
        }
        
        @media (max-width: 350px) and (orientation: portrait) and (max-height:500px){
           width: 6.101vh;
            @media (max-height: 400px){
                width: 7.401vh;
            }
        }
        
        @media (min-height: 770px){
            width: 4.8235vh;
            
            @media(min-width: 600px) and (max-height: 1000px){
                width: 5.8235vh;
            }
        }
         @media screen and (min-width:450px) and (max-height: 500px) and (orientation: portrait) {
             width: 8.3084vh;
        }
  }
   
`;

const VKShareButtonStyled = styled(VKShareButton)`
  ${ShareButtonSizeMixin};
`;

const FacebookShareButtonStyled = styled(FacebookShareButton)`
  ${ShareButtonSizeMixin};
`;

const SEVERSTAL_LINK = 'http://fut.ru/grp/severstal_grp?utm_source=fut&utm_medium=wowproject&utm_campaign=severstal';

export const Final = props => {
    const result = useResult();
    useBodyBackgroundColor('#000000');
    const vkShareParams = getShareParams(SocialNetwork.vk, result);
    const facebookShareParams = getShareParams(SocialNetwork.facebook, result);

    const handleLandingLinkClick = () => {
        reachMetrikaGoal('catalog');
    };

    return (
        <FinalWrapper>
            <ImgWrapper>
                <ImageRectangle resultType={result.type} />
                <ImgStyled src={result.image} alt={''}/>
                <Blackout />
            </ImgWrapper>
            <InfoWrapper>
                <LogoWrapper>
                    <LogoStyled />
                </LogoWrapper>
                <ResultTitle>Твой результат</ResultTitle>
                <ResultText>{result.description}</ResultText>
                <br />
                <InvitingText>
                    Хочешь, чтобы было так? Проходи отбор&nbsp;
                    <StyledLink
                        href={SEVERSTAL_LINK}
                        target={'_blank'}
                        onClick={handleLandingLinkClick}
                    >
                        на лидерскую программу компании Северсталь
                    </StyledLink>
                </InvitingText>
                <ShareBox>
                    <ShareText>Поделиться</ShareText>
                    <ShareIcons>
                        <VKShareButtonStyled shareParams={vkShareParams} />
                        <FacebookShareButtonStyled shareParams={facebookShareParams} />
                    </ShareIcons>
                </ShareBox>
            </InfoWrapper>
        </FinalWrapper>
    );
};