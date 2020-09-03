import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.4063vw;
  line-height: 113%;
  letter-spacing: 0.01em;
  
  @media screen and (min-width: 640px) and (max-width: 1199px)
  {
    font-size: 2.8645vw;
    padding-right: 12%;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 2.1333vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 3.7333vw;
  }
  @media screen and (max-height: 640px) and (orientation: landscape) and (max-width: 1199px){
      font-size: 2.1341vw;
  }
`