import styled from "@emotion/styled";

export const Outer = styled.section`
    position: relative;
    padding-top: 56.25%;  //Player ratio: 100 / (1280 / 720)
  
    & .react-player {
        position: absolute;
        top: 0;
        left: 0;
    }
  
` 