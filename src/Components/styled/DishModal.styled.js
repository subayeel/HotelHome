import styled from "styled-components";

export const ModalBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5vh 0 5vh 0;
  z-index: 10;
`;

export const GridContainer = styled.div`
  display: grid;

  margin: auto;
  background-color: ${(props) => props.bgcolor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  border-radius: ${(props) => (props.rounded ? "10px" : "0")};
  h2 {
    flex: 50%;
    margin-left: 20px;
  }
  h3 {
    flex: 50%;
    cursor: pointer;
    text-align: end;
    margin-right: 20px;
  }
  span {
    display: block;
  }
  span:hover {
    color: rgb(63, 203, 180);
  }
`;

export const GridItem = styled.div`
  grid-column-start: ${(props) => props.colstart};
  grid-column-end: ${(props) => props.colend};
  grid-row-start: ${(props) => props.rowstart};
  grid-row-end: ${(props) => props.rowend};
  background-color: ${props=>props.bgcolor ? ({theme})=>theme.colors.primarybg:""};
`;
export const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 20px;
  img {
    height: 30vh;
    
  }
`;
