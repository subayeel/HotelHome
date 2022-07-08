import styled from "styled-components";

export const DishCardContainer = styled.div`
  display: inline-block;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  padding: 10px;
  margin: 10px;
  border: 3px solid white;
  &:hover {
    transition-duration: 200ms;
    border: 3px solid black;
  }
  > img {
    width: 100%;
  }
  h3 {
    color: $brownBtnColor;
    margin: 0;
  }
  small {
    margin: 0;
    color: #555;
  }
`;
