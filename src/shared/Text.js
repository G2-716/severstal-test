import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.4583vw;
  line-height: 113%;
  letter-spacing: 0.01em;
  
  @media screen and (min-width: 640px) and (max-width: 1199px)
  {
    font-size: 2.4vw;
    padding-right: 12%;
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
  @media screen and (max-height: 450px ) 
  {
    font-size: 1.9341vw;
  }
  @media screen and (min-width: 750px ) and (min-height: 1025px ) 
  {
    font-size: 2.7341vw;
  }
  
  @media screen and (min-height: 450px ) and (max-height: 700px) and (min-width: 640px) and (max-width: 1199px)
  {
    font-size: 2.6333vw;
  }
`