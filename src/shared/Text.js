import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.4583vw;
  line-height: 113%;
  letter-spacing: 0.01em;
  
  @media screen and (min-width: 640px) and (max-width: 1199px)
  {
    font-size: 2.4vw;
    padding-right: 12%;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 2.1333vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 2.5341vw;
    padding-right: 12%;
    @media screen and (min-height: 560px ) 
      {
        font-size: 2.3341vh;
      }
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
      font-size: 2.1341vw;
  }
`