import React from 'react';
import styled from 'styled-components';
import { fade, slideDown } from '../../utils/keyframes';
import { Logo } from "../svg/Logo";
import { useResult } from '../../hocs/useResult';
import { getShareParams, SocialNetwork } from '../../utils/getShareParams';
import {ShareIcon} from "../svg/ShareIcon";
import {VkIcon} from "../svg/SocialMediaIcons/VkIcon";
import {FbIcon} from "../svg/SocialMediaIcons/FbIcon";
import {IgIcon} from "../svg/SocialMediaIcons/IgIcon";
import { VKShareButton } from '../Button/sharing/VKShareButton';
import { FacebookShareButton } from '../Button/sharing/FacebookShareButton';
import { InstagramShareButton } from '../Button/sharing/InstagramShareButton';

const FinalWrapper = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100%;
  padding-left: 13.6979vw ;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  grid-template-rows: 1fr;
  overflow: auto;
  position: relative;
  @media screen and (max-width: 1100px)
  { 
    padding-left: 0;
    padding-bottom: 15vh;
    display: inline-block;
    @media screen and (orientation: landscape) {
       padding-bottom: 0;
    }
  }
`;

const ResultTitle = styled.h1`
  font-weight: 800;
  font-size: 1.71875vw;
  line-height: 2.5vw;
  letter-spacing: 0.015em;
  margin-bottom: 8.4259vh;
  
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
    font-size: 2.44141vh;
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
  font-size: 1.5625vw;
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
    padding: 68.9453vh 15.2343vw 0 12.36872vw;
    margin: -3.6133vh 0 3.125vh 0;
    z-index: 3;
    color: white;
  }
  
  @media screen and (max-width: 640px)
  { 
      padding-left: 8.5333vw;
      padding-right: 3vw;
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
 @media screen and (max-width: 1100px)
  { 
      padding: 0;
      grid-area:none;
      overflow: hidden;
      position: absolute;
      top:0;
      left:0;
      bottom: 16.5898vh;
      right:0;
      @media screen and (orientation: landscape) {
         bottom: 0;
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
    position:absolute;
    width:100%;
    overflow: hidden;
    object-fit: cover;
    height: 100%;
    @media screen and (orientation: landscape) {
      height: auto;
    }
  }
  
  
`

const ShareBox = styled.div`
  color: white;
  display: flex;
  margin-top: 10.2777vh;
  align-items: center;
`;

const ShareText = styled(Text)`

`;

const StyledLink = styled.a`
    color: white;
`
const ShareMobile = styled(ShareIcon)`
      margin-left: 2.3vw;
      margin-bottom: -0.5em;
`
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.03125vw;
  margin-left: 2.8646vw;
`


export const Final = props => {
    const result = useResult();
    const vkShareParams = getShareParams(SocialNetwork.vk, result);
    const facebookShareParams = getShareParams(SocialNetwork.facebook, result);
    const instagramShareParams = getShareParams(SocialNetwork.instagram, result);

    return (
        <FinalWrapper>
            <ImgWrapper>
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
                    Хочешь, чтобы было так? Проходи отбор &nbsp;
                    <StyledLink href={'http://fut.ru/grp/severstal_grp'} target={'_blank'}>
                        на лидерскую программу компании “Северсталь”
                    </StyledLink>
                </InvitingText>
                <ShareBox>
                    <ShareText>Поделиться</ShareText>
                    <Icons>
                        <VKShareButton shareParams={vkShareParams} />
                        <FacebookShareButton shareParams={facebookShareParams} />
                        <InstagramShareButton shareParams={instagramShareParams} />
                    </Icons>
                </ShareBox>
            </InfoWrapper>
        </FinalWrapper>
    );
};