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
    font-size: 2.5341vh;
    padding-right: 12%;
  }
  @media screen and (max-height: 400px ) 
  {
    font-size: 2.7341vh;
  }
  @media screen and (min-width: 750px ) and (min-height: 1000px ) 
  {
    font-size: 2.7341vh;
  }
  
`