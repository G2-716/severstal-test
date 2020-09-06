import styled from "styled-components";
export const Subtitle = styled.p`
  font-size: 1.71875vw;
  font-weight: 600;
  line-height: 114%;
  letter-spacing: 0.015em;
  padding-bottom: 9.537vh;    
  @media screen and (min-width: 640px) and (max-width: 1100px)
  {
    font-size: 2.45vh;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 2.1333vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 2.5341vw;
    @media screen and (min-height: 560px ) 
      {
        font-size: 2.0936vh;
        padding-bottom: 9.6vw;
      }
  }
`
