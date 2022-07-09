import styled from "styled-components";

export const StyledTitle = styled.span`
  
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: ${props => props.white ? "white" : ({ theme }) => theme.colors.brownBtnColor};
  font-weight: 600;
  font-size: 22px;
  text-align: ${props => props.end ? "end" : "start"};
  margin: 10px;
  h3 {
    margin: 20px 0 0 20px;
    color: ${props => props.white ? "white" : ({ theme }) => theme.colors.brownBtnColor};
  }
`;

export const StyledBoldText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const HorizontalScrollable = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin: 0 0 0 20px;
  width: ${(props) => props.width};
  > div {
    display: inline-block;
    margin: 0;
  }
`;

export const StyledVegPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 88vh;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primarybg} 50%,
    ${({ theme }) => theme.colors.secondarybg} 50%
  );
`;
export const StyledContainer = styled.div`
  flex: 1;
  position: relative;

  > img {
    position: absolute;
    height: 50vh;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  iframe {
    margin: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  
`;

export const FlexItem = styled.div`
  flex: ${(props) => props.flex};
  display: inline-block;
  margin-right: ${(props) => props.margin};
  margin-left:${(props) => props.margin};
  flex-direction: row;
  justify-content: space-between;
  
  small {
    font-size: 12px;
  }
`;

export const RatingBox = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 2px 4px 2px 4px;
  background-color: green;
  color: white;
`;

export const Center = styled.div`
  text-align: center;
`;
export const LinkButton = styled.div`
  font-size: 18px;
  text-decoration: underline;
  color: ${({theme})=>theme.colors.brownBtnColor};
  z-index: 4;
  &:hover {
    cursor: pointer;
    color: brown;
  }
`;
