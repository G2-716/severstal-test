import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.5625vw;
  line-height: 113%;
  
  @media screen and (min-width: 640px) and (max-width: 1100px){
    font-size: 2.15vh;
    
    @media screen and (orientation: landscape) and (max-height: 700px){
     font-size: 2.0833vw;
    }
  }
  @media screen and (max-width: 640px){
    font-size: 2.4841vw;
    
    @media screen and (min-height: 560px){
            font-size: 1.7242vh;
      }
     
    @media screen and (orientation: landscape){
      font-size: 2.0841vw;
    }
  }
`